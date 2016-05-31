class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token

  respond_to :json

  skip_before_action :verify_authenticity_token, if: :json_request?
  before_action :configure_permitted_parameters, if: :devise_controller?

  def home
    render 'layouts/application'
  end

  protected

  def json_request?
    request.format.json?
  end

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
  end

end ## class end
