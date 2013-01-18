class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :authentication_keys => [:login]

  attr_accessor :login #username or email address
  attr_accessible :login, :email, :password, :password_confirmation, :remember_me,
                  :username, :name, :location, :bio, :avatar, :avatar_cache, :remove_avatar,
                  :repos_url

  mount_uploader :avatar, AvatarUploader

  validates :username, :uniqueness => true, :presence => true
  validates :username, :name, :location, :length => { :maximum => 30 }
  validates :bio, :length => { :maximum => 160 }

  has_and_belongs_to_many :followers, :class_name => "User", :join_table => "followers", :association_foreign_key => "follower_id",
                          :uniq => true, :before_add => :check_not_follow_myself
  #returns collection of users, for which user subscribed for
  has_and_belongs_to_many :following_for, :class_name => "User", :join_table => "followers", :foreign_key => "follower_id",
                          :uniq => true, :before_add => :check_not_follow_myself

  has_many :tweets, :inverse_of => :user, :dependent => :destroy
  has_many :authentications, :inverse_of => :user, :dependent => :destroy
  has_many :initial_projects, :inverse_of => :user, :dependent => :destroy

  #sets guest role for user (used in ability model)
  def guest!
    @is_guest = true
    self
  end

  def guest?
    @is_guest
  end

  def apply_omniauth(auth)
    ### temporary: setting fake email and password
    self.email = auth['extra']['raw_info']['email'] || "blankemail@example.com"
    self.password = "0000"
    ###

    self.repos_url = auth['extra']['raw_info']['repos_url']
    self.avatar = auth['info']['image']
    self.username = auth['info']['nickname']
    self.name = auth['info']['name']
    authentications.build(:provider => auth['provider'], :uid => auth['uid'], :token => auth['credentials']['token'])
  end

  private

  #checks that user not subscribe on himself
  def check_not_follow_myself(follower)
    raise ActiveRecord::ActiveRecordError, I18n::t("errors.user.cant_follow_myself") if self == follower
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
