class CreateMosaics < ActiveRecord::Migration
  def change
    create_table :mosaics do |t|
      t.string :name, default: "Untitled"
      t.belongs_to :user
      t.timestamps null: false
    end
  end
end
