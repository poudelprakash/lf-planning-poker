require 'rails_helper'

RSpec.describe Api::V1::RoomsController, type: :controller do
  render_views
  let(:json_response) { JSON.parse(response.body) }
  let(:user) {FactoryGirl.create(:user)}
  describe '#create' do
    context 'with valid params' do
      before do
        post :create, room:{name: 'newRoom'}
      end
      it { expect(response).to have_http_status(200) }
    end
  end
end
