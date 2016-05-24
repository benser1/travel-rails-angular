Rails.application.routes.draw do
  devise_for :users
  resources :visits
  resources :trips
  resources :attractions
  resources :cities
  resources :countries
  resources :users do
    member do
      get 'visited'
      get 'wishlist'
    end
  end

  root 'application#home'

  # post 'attractions/:id/visits' => 'visits#create'

end
