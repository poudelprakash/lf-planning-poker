class Api::V1::IssuesController < ApplicationController
  def index
    project_name = params[:projectName]
    binding.pry
    response = HTTParty.get("http://lf-planningpoker.atlassian.net/rest/api/2/search?project="+project_name, headers:{
                                                                                                               "Authorization" => 'Basic YWRtaW46bGVhcGZyb2c=\n'
                                                                                                           }
    )
    render json: response, status: :success
  end
end