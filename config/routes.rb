Rails.application.routes.draw do
  devise_for :users
  resources :visits
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

  post 'attractions/:id/wishes' => 'wishlists#create'

  post 'attractions/:id/visited' => 'visits#create'
end
