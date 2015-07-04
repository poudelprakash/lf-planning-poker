require 'rails_helper'

RSpec.describe Story, type: :model do
  describe(:validation) do
    subject { build(:story) }
    it { is_expected.to belong_to(:room) }
  end
end
