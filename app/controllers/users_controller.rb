get '/users/new' do
  erb :'_users_new', layout: false
end

post '/users' do
  @user = User.create(params[:user])
end
