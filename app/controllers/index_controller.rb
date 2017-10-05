get '/' do

  erb :'index'
end

get '/images' do
  screenshotter = Screencap::Fetcher.new("/")
  @screenshot = screenshotter.fetch(div: ".cells")
  # erb :"image"
  File.open("/images/new_image.jpg", 'wb') { |f| f.write(@screenshot) }
end
