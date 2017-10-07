class AddMosaicIdToTiles < ActiveRecord::Migration
  def change
    add_column :tiles, :mosaic_id, :integer
    add_foreign_key :tiles, :mosaics
  end
end
