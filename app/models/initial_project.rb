class InitialProject < ActiveRecord::Base
  attr_accessible :name, :user_id
  belongs_to :user, :inverse_of => :initial_project
end
