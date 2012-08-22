class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :authentication_keys => [:login]

  attr_accessor :login #username or email address
  attr_accessible :login, :email, :password, :password_confirmation, :remember_me
  attr_accessible :username, :name, :location, :bio, :avatar, :avatar_cache, :remove_avatar

  mount_uploader :avatar, AvatarUploader

  validates :username, :uniqueness => true
  validates :username, :presence => true
  validates :username, :name, :location, :length => { :maximum => 30 }
  validates :bio, :length => { :maximum => 160 }

  has_and_belongs_to_many :followers, :class_name => "User", :join_table => "followers", :association_foreign_key => "follower_id",
                          :uniq => true, :before_add => :check_not_follow_myself
  has_many :tweets, :inverse_of => :user, :dependent => :destroy

  private

  #checks that user not subscribe on himself
  def check_not_follow_myself(follower)
    raise ActiveRecord::ActiveRecordError, 'I18n::t("errors.user.cant_follow_myself")' if self == follower
  end

  #Overwrites Devise’s method to allow users to sign in using their username or email address
  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if (login = conditions.delete(:login))
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
      where(conditions).first
    end
  end
end
