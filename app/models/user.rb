class User < ActiveRecord::Base
  enum role: [:moderator, :general]
  belongs_to :room

  def self.find_for_verified_token_response(auth)
    user = User.where(:provider => "google_oauth2", :uid => auth[:id]).first

    unless user
      user = User.create(name: auth[:name],
      email: auth[:email],
      image_url: auth[:picture],
      provider: "google_oauth2",
      uid: auth[:id])
    end
    user
  end
end
