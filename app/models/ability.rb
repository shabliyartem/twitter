class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new.guest! # guest user (not logged in)
    if user.admin?
      can :manage, :all
    elsif user.guest?
      can :read, :all
    # not guest and not admin = authenticated user
    else
      can :read, :all
      can :manage, User, :id => user.id
      can :follow, User
      can :unfollow, User
      can :create, Tweet
      can :manage, Tweet, :user_id => user.id
    end
  end
end
