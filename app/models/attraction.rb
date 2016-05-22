class Attraction < ActiveRecord::Base

  has_many :visits
  has_many :trips
  has_many :users, through: :visits
  has_many :trip_attractions
  has_many :trips, through: :trip_attractions
  belongs_to :city
  belongs_to :country
  belongs_to :user
  has_many :visitors, through: :visits, source: :user

  def as_json(options = {})
    super(options.merge(include: [:country, :city, :visits, :visitors]))
  end

end
