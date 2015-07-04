class AddKeyToStory < ActiveRecord::Migration
  def change
    add_column :stories, :key, :string
  end
end
