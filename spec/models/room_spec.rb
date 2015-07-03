require 'rails_helper'

RSpec.describe Room, type: :model do
  describe 'validation' do
    subject { build(:room) }
    it { is_expected.to have_many(:users) }
  end
end
