class TweetsController < ApplicationController

  load_and_authorize_resource

  # GET /tweets
  def index
    @tweets = Tweet.all

    respond_to do |format|
      format.html # index.html.erb
    end
  end

  # GET /tweets/1
  def show
    @tweet = Tweet.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end

  # GET /tweets/new
  def new
    @tweet = Tweet.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  # GET /tweets/1/edit
  def edit
    @tweet = Tweet.find(params[:id])
  end

  # POST /tweets
  def create
    @tweet = Tweet.new(params[:tweet])
    @tweet.user = current_user

    respond_to do |format|
      if @tweet.save
        format.html { redirect_to [@tweet.user, @tweet], notice: 'Tweet was successfully created.' }
        format.js
      else
        format.html { render action: "new" }
      end
    end
  end

  # PUT /tweets/1
  def update
    @tweet = Tweet.find(params[:id])

    respond_to do |format|
      if @tweet.update_attributes(params[:tweet])
        format.html { redirect_to [@tweet.user, @tweet], notice: 'Tweet was successfully updated.' }
      else
        format.html { render action: "edit" }
      end
    end
  end

  # DELETE /tweets/1
  def destroy
    @tweet = Tweet.find(params[:id])
    user = @tweet.user
    @tweet.destroy

    respond_to do |format|
      format.html { redirect_to user_tweets_url(user) }
    end
  end
end
