class TripsController < ApplicationController
  respond_to :json
  def index
    respond_with Trip.all
  end

  def show
    respond_with Trip.find(params[:id])
  end

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      respond_to do |format|
        format.json { render :json => @trip }
      end
    end
  end

  def edit
    trip = Trip.find(params[:id])
  end

  def update
    trip = Trip.find(params[:id])
    trip.update(trip_params)

    respond_with trip
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :user_id)
  end

end
