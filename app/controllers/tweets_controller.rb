class TweetsController < ApplicationController

  load_and_authorize_resource
  respond_to :html, :only => [:new, :edit]
  respond_to :js, :only => [:new, :edit]

  def new
    @tweet = current_user.tweets.build
  end

  def edit
    @tweet = Tweet.find(params[:id])
  end

  def create
    @tweet = Tweet.new(params[:tweet])
    @tweet.user = current_user

    respond_with(@tweet) do |format|
      if @tweet.save
        format.html { redirect_to user_path(@tweet.user), notice: 'Tweet was successfully created.' }
        format.js
      else
        format.html { render action: "new" }
        format.js { render action: "new" }
      end
    end
  end

  def update
    @tweet = Tweet.find(params[:id])

    respond_with(@tweet) do |format|
      if @tweet.update_attributes(params[:tweet])
        format.html { redirect_to user_path(@tweet.user), notice: 'Tweet was successfully updated.' }
        format.js
      else
        format.html { render action: "edit" }
        format.js { render action: "edit" }
      end
    end
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    user = @tweet.user
    @tweet.destroy

    respond_with(@tweet) do |format|
      format.html { redirect_to user_path(user) }
    end
  end
end
