class Api::V1::MessagesController < ApplicationController
  def create
    Pusher['test_channel'].trigger('my_event', params_model.to_json
    )
    render nothing: :true, status: :created
  end

  private
  def params_model
    params.require(:message).permit(:body, :user_id)
  end
end