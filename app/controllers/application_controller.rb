class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter do
    @tweet = current_user.tweets.build if user_signed_in?
  end
end
