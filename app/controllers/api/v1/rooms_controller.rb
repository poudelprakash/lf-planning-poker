class Api::V1::RoomsController < ApplicationController

  # @url /api/v1/rooms/create
  # @action POST
  #
  # creates new room
  #
  # @example_response
  # ```
  # {"success": true,
  # "message": "room created successfully"
  # }
  # ```
  def create
    room = Room.new room_params
    if room.save!
      render json: {success: true, message: t(:room_created_successfully)}, status: 200
    else
      render json: {success: false, error: t(:room_could_not_be_created)}, status: 400
    end
  end

  # @url /api/v1/rooms
  # @action Get
  #
  # lists all rooms
  #
  # @example_response
  # ```
  # [{"id":1,"name":"lobby","created_at":"2015-07-03T18:21:01.000Z","updated_at":"2015-07-03T18:21:01.000Z"}]
  # ```
  def index
    @rooms = Room.all
  end

  private
  def room_params
    params.require(:room).permit(:name)
  end

  def params_model
    params.require(:message).permit(:score)
  end
end
