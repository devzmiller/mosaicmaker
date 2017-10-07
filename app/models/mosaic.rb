class Mosaic < ActiveRecord::Base
  belongs_to :user
  has_many :tiles
end
