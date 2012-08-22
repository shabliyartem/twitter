class AddFieldsToUser < ActiveRecord::Migration
  def change
    change_table(:users) do |t|
      t.string :name
      t.string :location
      t.string :bio
    end
  end
end
