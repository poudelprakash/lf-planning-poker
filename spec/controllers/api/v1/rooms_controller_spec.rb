require 'rails_helper'

RSpec.describe Api::V1::RoomsController, type: :controller do
  render_views
  let(:json_response) { JSON.parse(response.body) }
  let(:room) {FactoryGirl.create(:room)}
  let(:user) {FactoryGirl.create(:user, room_id: room.id)}
  let(:@user) do
    stub_model User, id: 5, name: "Katherine", provider: 'Kat', uid: '22222222222', email: 'hello@gmail.com', role: 0, room_id: 1
  end
  before(:each) do
    @user = user
  end

  describe '#index' do
    before do
      get :index
    end
  end
  describe '#create' do
    context 'with valid params' do
      before do
        post :create, room:{name: 'newRoom'}
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
