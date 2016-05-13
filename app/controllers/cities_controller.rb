class CitiesController < ApplicationController
  respond_to :json
  def index
    respond_with City.all
  end

  def show
    respond_with City.find(params[:id])
  end

  def create
    @city = City.new(city_params)
    if @city.save
      respond_to do |format|
        format.json { render :json => @city }
      end
    end
  end

  def edit
    city = City.find(params[:id])
  end

  def update
    city = City.find(params[:id])
    city.update(city_params)

    respond_with city
  end

  private

  def city_params
    params.require(:city).permit(:name, :country_id)
  end

end # class end
