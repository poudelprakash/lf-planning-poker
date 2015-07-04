
class Api::V1::StoriesController < ApplicationController

  def index
    room = Room.find(params[:id])
    stories = room.stories
    render json: stories.to_json
  end


  def assign_point
    story = Story.find(params[:id])
    story_point = params[:story_point]
    story.update(story_point: story_point)
    render json: {success: true, message: t(:story_point_updated)}, status: 200
  end

end
