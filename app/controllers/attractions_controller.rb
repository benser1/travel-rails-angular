class AttractionsController < ApplicationController
  respond_to :json
  def index
    respond_with Attraction.all
  end

  def show
    respond_with Attraction.find(params[:id])
  end

  # def new
  #   respond_with Attraction.new
  # end

  def create
    # respond_with Attraction.create(attraction_params)
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

  # def update
  #   attraction = Attraction.find(params[:id])
  #   attraction.update(attraction_params)
  #
  #   respond_with attraction
  # end

  def update
    @attraction = Attraction.find(params[:id])
    user = current_user
    if !@attraction.visitors.include?(user)
      @attraction.visitors << user
      @attraction.update(attraction_params)
      respond_to do |format|
        format.json { render :json => @attraction }
      end
    end
    # @attraction.update(attraction_params)
    # respond_to do |format|
    #   format.json { render :json => @attraction }
    # end
  end

  def destroy
    # respond_with(Attraction.destroy(params[:id]))
    attraction = Attraction.find(params[:id])
    respond_with attraction.destroy
  end

  private

  def attraction_params
    params.require(:attraction).permit(:name, :address, :zip, :country_id, :city_id)
  end

end # class end
