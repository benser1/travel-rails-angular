class CountriesController < ApplicationController
  # respond_to :json
  def index
    respond_with Country.all
  end

  def show
    respond_with Country.find(params[:id])
  end

  def create
    @country = Country.find_or_create_by(country_params)
    if @country.save
      respond_to do |format|
        format.json { render :json => @country }
      end
    end
  end

  def edit
    country = Country.find(params[:id])
  end

  def update
    country = Country.find(params[:id])
    country.update(country_params)

    respond_with country
  end

  private

  def country_params
    params.require(:country).permit(:name)
  end

  end # class end
