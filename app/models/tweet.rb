class Tweet < ActiveRecord::Base
  attr_accessible :text, :user_id#, :tweet_id

  validates :text, :user, :presence => true

  belongs_to :user, :inverse_of => :tweets
end
