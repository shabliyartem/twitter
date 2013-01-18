class InitialProject < ActiveRecord::Base
  attr_accessible :name, :user
  belongs_to :user, :inverse_of => :initial_projects

  validates :name, :presence => true, :uniqueness => true

  after_destroy do |record|
    require "fileutils"
    FileUtils.rm_rf(record.path) rescue nil
  end

  SCAFFOLDS_FOLDER_PATH = File.join(Rails.root, "public/uploads/project_scaffolds")

  def path
    File.join(Rails.root, "public/uploads/user_projects", self.user.username, "initial_projects", self.name)
  end
end
