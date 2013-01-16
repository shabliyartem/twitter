class UsersController < ApplicationController

  load_and_authorize_resource
  respond_to :html, :only => [:index, :show, :edit]
  respond_to :js, :only => [:follow, :unfollow]

  # GET /users
  def index
    @users = User.page(params[:page])
  end

  # GET /users/1
  def show
    #if brows to the main page while not signed in, show login page
    authenticate_user! if !user_signed_in? && params[:id].nil?
    params[:id] ||= current_user.id
    @user = User.find(params[:id])

    users_whose_tweets_show = [@user.id]
    users_whose_tweets_show << @user.following_for.pluck(:id) if @user == current_user
    @tweets = Tweet.where(:user_id => users_whose_tweets_show).order("created_at DESC").page(params[:page])

    #loading info about users github repos on server-side
    #require 'net/http'
    #uri = URI.parse(@user.repos_url)
    #http = Net::HTTP.new(uri.host, uri.port)
    #http.use_ssl = true
    #http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    #request = Net::HTTP::Get.new(uri.request_uri)
    #@repos = ActiveSupport::JSON.decode http.request(request).body
  end

  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  # POST /users/1/follow
  def follow
    @user = User.find(params[:id])
    authorize! :follow, @user
    @user.followers << current_user
  end

  # DELETE /users/1/unfollow
  def unfollow
    @user = User.find(params[:id])
    authorize! :unfollow, @user
    @user.followers.delete current_user
    respond_with(@user) do |format|
      format.js { render action: "follow" }
    end
  end

  # PUT /users/1
  def update
    @user = User.find(params[:id])

    respond_with(@user) do |format|
      if @user.update_attributes(params[:user])
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
      else
        format.html { render action: "edit" }
      end
    end
  end

  def clone_repo
    path = File.join(Rails.root, "public/uploads/projects", current_user.username, params[:repo_name])
    `git clone #{params[:repo_url]} #{path}`
    @result = test_project(path)
  end

  private

  def test_project(path, lang = "ruby", versions = "1.9.3", proj_name_on_cibox = "temp_proj")
    res = []
    res << "removing .cibox folder: " + `rm -r #{path}/.cibox`
    res << "adding new .cibox folder: " + `mkdir #{path}/.cibox`
    res << "writing .cibox/repo file: " + `echo #{proj_name_on_cibox} > #{path}/.cibox/repo`
    res << "writing .cibox/lang file: " + `echo #{lang} > #{path}/.cibox/lang`
    res << "writing .cibox/versions file: " + `echo #{versions} > #{path}/.cibox/versions`

    res << "adding gem 'cucumber' to Gemfile: " + `echo "gem 'cucumber'" >> #{path}/Gemfile`
    res << "adding gem 'cucumber-rails' to Gemfile: " + `echo "gem 'cucumber-rails'" >> #{path}/Gemfile`

    res << "writing 'bundle install' to commands file: " + `echo bundle install > #{path}/.cibox/commands`
    res << "writing 'db:create' to commands file: " + `echo rake db:create RAILS_ENV=test >> #{path}/.cibox/commands`
    res << "writing 'db:migrate' to commands file: " + `echo rake db:migrate RAILS_ENV=test >> #{path}/.cibox/commands`
    res << "writing 'bundle exec cucumber' to commands file: " + `echo bundle exec cucumber >> #{path}/.cibox/commands`

    res << "pushing project to cibox.org: " + `(cd #{path}; cibox push)`
    res.join '  ======================================================  '
  end
end
