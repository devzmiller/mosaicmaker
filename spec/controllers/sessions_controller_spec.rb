require 'spec_helper'

describe "SessionsController" do
  describe 'get /sessions/new' do
    it 'returns OK status' do
      get '/sessions/new'
      expect(last_response).to be_ok
    end
  end
end
