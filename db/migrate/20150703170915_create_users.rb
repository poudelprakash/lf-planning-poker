class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :provider
      t.string :uid
      t.string :email
      t.string :image_url

      t.timestamps null: false
    end
  end
end
