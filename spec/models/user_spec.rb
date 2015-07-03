require 'rails_helper'

RSpec.describe User, type: :model do
  describe(:validation) do
    subject { build(:user) }
    it { is_expected.to belong_to(:room) }
  end
end
