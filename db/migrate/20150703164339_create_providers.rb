class CreateProviders < ActiveRecord::Migration
  def change
    create_table :providers do |t|
      t.string :uid
      t.string :name
      t.string :email
      t.string :image_url

      t.timestamps null: false
    end
  end
end
