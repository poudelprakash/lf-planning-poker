class AddRoomIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :room_id, :integer, default: 1
    add_foreign_key :users, :rooms
  end
end
