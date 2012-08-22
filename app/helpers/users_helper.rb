module UsersHelper

  #returns appropriate link (follow or stop following) on pages of other users
  def follow_link(user)
    if current_user == user
      nil
    elsif user.followers.include? current_user
      link_to "Stop following", unfollow_user_path(user), :method => :delete, :remote => true
    else
      link_to "Follow", follow_user_path(user), :method => :post, :remote => true
    end
  end

end
