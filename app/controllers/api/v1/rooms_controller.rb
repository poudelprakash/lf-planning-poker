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
      @user.moderator!
      10.times do |i|
        room.stories.create(title: "title #{i}", description: "description #{i}")
      end
      render json: {success: true, message: t(:room_created_successfully), stories: room.stories.to_json}, status: 200
    else
      render json: {success: false, error: t(:room_could_not_be_created)}, status: 400
    end
  end

  def show
    @room = Room.find(params[:id])
    @room.users << @user
    Pusher["room#{@room.id}"].trigger('changedUser', @room.users.to_json)
    render json: @room.users, status: :created
  end

  # @url /api/v1/rooms
  # @action Get
  #Moderator
  # lists all rooms
  #
  # @example_response
  # ```
  # [{"id":1,"name":"lobby","created_at":"2015-07-03T18:21:01.000Z","updated_at":"2015-07-03T18:21:01.000Z"}]
  # ```
  def index
    @rooms = Room.all
  end

  def hold_card
    room = Room.find(params[:id])
    card_value = params[:card]
    @user.update!(holding_card: card_value)
    Pusher["room#{room.id}"].trigger('user_id', @user.id)
    render json: "updated holding card"
  end

  def flip_card
    room = Room.find(params[:id])
    Pusher["room#{room.id}"].trigger('card_values', room.users.all.to_json)
    render json: 'cards displayed'
  end

  def reset_cards
    room = Room.find(params[:id])
    users = room.users
    users.each do |user|
      user.update!(holding_card: '')
    end
    Pusher["room#{room.id}"].trigger('reset_game', room.users.all.to_json)
    render json: 'cards reset completed'
  end

  private
  def room_params
    params.require(:room).permit(:name)
  end

  def params_model
    params.require(:message).permit(:score)
  end

end
