class Attraction < ActiveRecord::Base

  has_many :visits
  has_many :users, through: :visits
  has_many :trip_attractions
  has_many :trips, through: :trip_attractions
  belongs_to :city
  belongs_to :country

  def as_json(options = {})
    super(options.merge(include: [:country, :city, :visits, :users]))
  end

end
