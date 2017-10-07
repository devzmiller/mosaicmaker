require 'spec_helper'

describe Mosaic do
  describe 'associations' do
    let!(:user) {User.create!(name: "Georgina Crabapple", email: "crabapple@gmail.com", password: "ham")}
    let!(:mosaic) {Mosaic.create!(name: "Cats", user: user)}
    let!(:tile) {Tile.create!(mosaic: mosaic)}
    it 'belongs to a user' do
      expect(mosaic.user).to eq user
    end
    it 'has tiles' do
      expect(mosaic.tiles).to include tile
    end
  end
end
