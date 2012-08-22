class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.integer :user_id
      t.text :text
      t.integer :tweet_id

      t.timestamps
    end
  end
end
