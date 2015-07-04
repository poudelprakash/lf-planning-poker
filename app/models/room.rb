class Room < ActiveRecord::Base
  has_many :users
  has_many :stories, dependent: :destroy
  validates :name, presence: :true
end
