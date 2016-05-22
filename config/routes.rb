Rails.application.routes.draw do
  devise_for :users
  resources :visits
  resources :trips
  resources :attractions
  resources :cities
  resources :countries
  resources :users 

  root 'application#home'

  # post 'attractions/:id/visits' => 'visits#create'

end
