class Room < ActiveRecord::Base
  has_many :users
  has_many :stories
  validates :name, presence: :true
end
