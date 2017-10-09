require 'spec_helper'

describe "SessionsController" do
  let!(:user) { User.new(name: "Georgina Crabapple", email: "crabapple@gmail.com", password: "ham")}

  describe 'get /sessions/new' do
    it 'returns OK status' do
      get '/sessions/new'
      expect(last_response).to be_ok
    end
  end

  describe 'post /sessions' do
    it 'returns OK status' do
      post '/sessions', {email: "crabapple@gmail.com", password: "ham"}
      expect(last_response).to be_ok
    end
    it 'makes a logout link visible'
  end

  describe 'delete /sessions' do
    it 'returns OK status' do
      delete "/sessions/1", {}, "rack.session" => {user_id: "#{user.id}"}
      expect(last_response).to be_ok
    end
  end
end
