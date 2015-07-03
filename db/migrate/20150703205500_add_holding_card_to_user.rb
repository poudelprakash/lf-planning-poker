class AddHoldingCardToUser < ActiveRecord::Migration
  def change
    add_column :users, :holding_card, :float
  end
end
