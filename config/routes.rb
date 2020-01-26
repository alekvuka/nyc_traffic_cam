Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/cameras', to: 'cameras#all'
  get '/cameras/:id', to: 'cameras#show'
  get '/avenues', to: 'avenues#all'

  post '/request', to: 'requests#create'

end
