require 'spec_helper'

describe Tile do
  describe 'associations' do
    let!(:user) {User.create!(name: "Georgina Crabapple", email: "crabapple@gmail.com", password: "ham")}
    let!(:mosaic) {Mosaic.create!(name: "Cats", user: user)}
    let!(:tile) {Tile.create!(mosaic: mosaic)}
    it 'belongs to a mosaic' do
      expect(tile.mosaic).to eq mosaic
    end
  end
end
