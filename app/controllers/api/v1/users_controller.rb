class Api::V1::UsersController < ApplicationController
  def user_info
  end

  def hold_card
    user = User.find(params[:id])
    room = Room.find(params[:id])
    card_value = params[:card]
    user.update!(holding_card: card_value)
    Pusher["room#{room.id}"].trigger('user_id', user.id)
    render json: "updated holding card"
  end
end
