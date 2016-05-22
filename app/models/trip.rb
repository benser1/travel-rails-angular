class Trip < ActiveRecord::Base

  belongs_to :user
  has_many :trip_attractions
  has_many :attractions, through: :trip_attractions
  # has_many :countries, through: :attractions
  # has_many :cities, through: :attractions

  def as_json(options = {})
    super(options.merge(:include => {:user => {},
    :attractions => {:include => [:country, :city]}}))
  end

end
