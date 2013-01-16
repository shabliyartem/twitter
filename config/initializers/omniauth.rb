Rails.application.config.middleware.use OmniAuth::Builder do
  # facebook app id and security code are fake
  provider :facebook, "335194483202896", "608a8277064afd99d2c563c7d5a43e89", {:scope => 'email, read_stream, read_friendlists, friends_likes, friends_status, offline_access'}
  provider :github, "0da77013d853eb126c3a", "5d68432905b68ced1c4b6ee74c1f800eb4553ea0"#, :scope => "user,public_repo"

  # If you want to also configure for additional login services, they would be configured here.
end
