class InitialProject < ActiveRecord::Base
  attr_accessible :name, :user
  belongs_to :user, :inverse_of => :initial_projects

  validates :name, :presence => true, :uniqueness => true
end
