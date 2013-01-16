class Authentication < ActiveRecord::Base
  belongs_to :user, :inverse_of => :authentications
  attr_accessible :provider, :token, :uid
end
