class WishlistsController < ApplicationController

  def create
    attraction = Attraction.find(params[:id])
    attraction.wishlists.build(user: current_user)
    if attraction.save
      render json: attraction
    end
  end
end
