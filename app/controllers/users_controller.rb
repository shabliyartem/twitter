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
    @tweets = Tweet.where(:user_id => @user.following_for.pluck(:id).push(@user.id)).order("created_at DESC").page(params[:page])
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
end
