get '/sessions/new' do
  erb :"/_sessions_new", layout: false
end

post '/sessions' do
  user = User.authenticate(params[:email], params[:password])
  if user != nil
    session[:user_id] = user.id
    "Success!"
  else
    "Invalid username or password"
  end
end
