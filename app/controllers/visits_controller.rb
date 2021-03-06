class VisitsController < ApplicationController

  def create
    attraction = Attraction.find(params[:id])
    attraction.visits.build(user: current_user)
    if attraction.save
      render json: attraction
    end
  end
end
