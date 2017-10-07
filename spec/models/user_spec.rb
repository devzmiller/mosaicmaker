require 'spec_helper'

describe User do

  describe 'validations' do
    context 'is invalid when' do
      let!(:user) { User.new(name: "Georgina Crabapple", email: "crabapple@gmail.com", password: "ham")}
      it 'does not have a name' do
        user.name = nil
        expect(user).to_not be_valid
      end
      it 'does not have an email' do
        user.email = nil
        expect(user).to_not be_valid
      end
      it 'does not have a password_hash' do
        user.password_hash = nil
        expect(user).to_not be_valid
      end
      it 'has a password_hash that is not encrypted' do
        expect(user.password_hash).to_not eq "ham"
      end
    end
  end
end
