class UsersController < ApplicationController

  def index
    respond_with User.all
  end

  # def visited
  #   attractions = current_user.visited_attractions
  # end

  def show
    respond_with User.find(params[:id])
  end

  def update
    @user = current_user.update(user_params)
    # attraction = Attraction.find(params[:attraction_id] || params[:id])
    # if !@user.visits.include?(attraction)
    #   @user.visits << attraction
    #   @user.save
    #   @user.update
    #   respond_to do |format|
    #     format.json { render :json => @user }
    #   end
    # end
    # @user.update
    # respond_to do |format|
    #   format.json { render :json => @user }
    # end
  end

  private

  def user_params
    params.require(:user).permit({visits: []})
  end
end
