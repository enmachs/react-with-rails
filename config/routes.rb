Rails.application.routes.draw do
  root 'home#index'
  get '/my_route', to: 'home#my_house'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
