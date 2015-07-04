class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.string :description
      t.integer :story_point
      t.integer :room_id
      t.timestamps null: false
    end
    add_foreign_key :stories, :rooms
  end
end
