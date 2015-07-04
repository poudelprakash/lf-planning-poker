class Story < ActiveRecord::Base
  belongs_to :room

  def self.all_issues(room, project_name)
    response = HTTParty.get("http://lf-planningpoker.atlassian.net/rest/api/2/search?project="+project_name, headers:{
                                                                                                               "Authorization" => 'Basic YWRtaW46bGVhcGZyb2c=\n'
                                                                                                           }
    )
    response['issues'].each do |issue|
      key = issue['key']
      description = issue['fields']['description']
      title = issue['fields']['summary']
      room.stories.create(key:key, description: description, title: title)
    end
  end
end
