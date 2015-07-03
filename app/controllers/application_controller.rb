class ApplicationController < ActionController::Base
  protect_from_forgery
  require 'rubygems'
  require 'pp'
  require 'jira'
  binding.pry
  rescue_from JIRA::OauthClient::UninitializedAccessTokenError do
    redirect_to new_jira_session_url
  end

  private

  def get_jira_client

    # add any extra configuration options for your instance of JIRA,
    # e.g. :use_ssl, :ssl_verify_mode, :context_path, :site
    options = {
    :private_key_file => "rsakey.pem",
    :consumer_key => 'youngmaze'
    }

    @jira_client = JIRA::Client.new(options)

    # Add AccessToken if authorised previously.
    if session[:jira_auth]
      @jira_client.set_access_token(
      session[:jira_auth][:access_token],
      session[:jira_auth][:access_key]
      )
    end
  end
end
