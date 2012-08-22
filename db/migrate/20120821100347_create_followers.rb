class CreateFollowers < ActiveRecord::Migration
  def change
    create_table :followers, :id => false do |t|
      t.integer :user_id
      t.integer :follower_id
    end

    add_index(:followers, [:user_id, :follower_id], :unique => true)
  end
end
