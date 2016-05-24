class UsersController < ApplicationController
  respond_to :json
  def index
    respond_with User.all
  end

  def visited
    attractions = current_user.visited_attractions
    render json: attractions
  end

  def wishlist
    attractions = current_user.wishlist_attractions
    render json: attractions
  end

  def show
    user = User.find(params[:user_id] || params[:id])
    render json: user
  end

  def update
    @user = current_user.update(user_params)
  end

  private

  def user_params
    params.require(:user).permit({visits: []})
  end
end
