class Api::V1::StoriesController < ApplicationController
  belongs_to :room

  def index
    room = Room.find(params[:id])
    stories = room.stories
    render json: stories.to_json
  end


  def assign_point
    story = Story.find(params[:id])
    stories = story.room.stories
    story_point = params[:story_point]
    story.update(story_point: story_point)
    Pusher["room#{story.room.id}"].trigger('story_point_assigned', story_point.to_json)
    render json: stories.to_json
  end

end
