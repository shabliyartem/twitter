class Tweet < ActiveRecord::Base
  attr_accessible :text, :user_id, :img_attachment, :img_attachment_cache, :remove_img_attachment

  mount_uploader :img_attachment, AvatarUploader

  validates :user, :text, :presence => true

  belongs_to :user, :inverse_of => :tweets
end
