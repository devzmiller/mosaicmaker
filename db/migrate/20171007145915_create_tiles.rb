class CreateTiles < ActiveRecord::Migration
  def change
    create_table :tiles do |t|
      t.string :background_color, default: "rgb(255, 255, 255)", null: false
      t.timestamps null: false
    end
  end
end
