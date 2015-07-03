class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :verify_token

  private

  def verify_token
    token = request.headers["HTTP_AUTHORIZATION"]
    response = HTTParty.get("https://www.googleapis.com/oauth2/v2/userinfo",
    headers: {"Access_token" => token,
    "Authorization" => "OAuth #{token}"})

    if response.code == 200
      data = JSON.parse(response.body)
      @user = User.find_for_verified_token_response(data.symbolize_keys)
    else
      render nothing: true, status: :unauthorized
    end
  end
end
