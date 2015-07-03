require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validation' do
    subject { build(:user) }
    it { is_expected.to belong_to(:room) }
    it { is_expected.to validate_presence_of(:email)}
  end

end
