class VisitsController < ApplicationController

  def create
    attraction = set_attraction
    attraction.visits.create(user: current_user)
  end
end
