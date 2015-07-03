class Api::V1::ScoreController < ApplicationController
def create
  room = Message.create params_model
  json  = model.to_json
  channel = "private-conversation.#{params[:user_id]}"
  Pusher[channel].trigger 'messages/create', json
end

private
def params_model
  params.require(:message).permit(:score)
end
end