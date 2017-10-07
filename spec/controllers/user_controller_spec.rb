require 'spec_helper'

describe "UserController" do
  describe '/users/new' do
    it 'returns OK status' do
      get '/users/new'
      expect(last_response).to be_ok
    end
  end
end
