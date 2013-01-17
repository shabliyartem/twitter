class CreateInitialProjects < ActiveRecord::Migration
  def change
    create_table :initial_projects do |t|
      t.integer :user_id
      t.string :name

      t.timestamps
    end
  end
end
