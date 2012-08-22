class AddImgAttachmentToTweets < ActiveRecord::Migration
  def change
    add_column :tweets, :img_attachment, :string
  end
end
