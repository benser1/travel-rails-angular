class AttractionsController < ApplicationController
  respond_to :json
  def index
    respond_with Attraction.all
  end

  def show
    respond_with Attraction.find(params[:id])
  end

  def create
    @attraction = Attraction.new(attraction_params)
    if @attraction.save
      respond_to do |format|
        format.json { render :json => @attraction }
      end
    end
  end

  def edit
    attraction = Attraction.find(params[:id])
  end

  def update
    @attraction = Attraction.find(params[:id])
    user = current_user
    if !@attraction.visitors.include?(user)
      @attraction.visitors << user
      @attraction.update(attraction_params)
      respond_to do |format|
        format.json { render :json => @attraction }
      end
    elsif !@attraction.wishes.include?(user)
      @attraction.wishes << user
      @attraction.update(attraction_params)
      respond_to do |format|
        format.json { render :json => @attraction }
      end
    else
      @attraction.update(attraction_params)
      respond_to do |format|
        format.json { render :json => @attraction }
      end
    end
  end

  def destroy
    attraction = Attraction.find(params[:id])
    respond_with attraction.destroy
  end

  private

  def attraction_params
    params.require(:attraction).permit(:name, :address, :zip, :country_id, :city_id)
  end

end # class end
