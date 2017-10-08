require 'spec_helper'

describe "UserController" do
  describe '/users/new' do
    it 'returns OK status' do
      get '/users/new'
      expect(last_response).to be_ok
    end
  end
  describe 'post /users' do
    it 'creates a new user' do
      post '/users', {user: {name: "bob", email: "bob@llama.com", password: "ham"}}
      expect(User.find_by_email("bob@llama.com")).to be_a User
    end
  end
end
