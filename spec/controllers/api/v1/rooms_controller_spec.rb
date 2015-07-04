require 'rails_helper'

RSpec.describe Api::V1::RoomsController, type: :controller do
  render_views
  let(:json_response) { JSON.parse(response.body) }
  let(:room) {FactoryGirl.create(:room)}
  let(:user) {FactoryGirl.create(:user, room_id: room.id)}

  describe '#create' do
    context 'with valid params' do
      before do
        post :create, room:{name: 'newRoom'}, project_name: 'LFPLAN'
      end
      it { expect(response).to have_http_status(200) }
    end
    end

  describe '#show' do
    context 'with valid params' do
      before do
        get :show, id: room.id
      end
      it { expect(response).to have_http_status(200) }
    end
  end
end
