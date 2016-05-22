class Attraction < ActiveRecord::Base

  has_many :visits
  has_many :trips
  belongs_to :city
  belongs_to :country
  belongs_to :user
  has_many :visitors, through: :visits, source: :user

  def as_json(options = {})
    super(options.merge(include: [:country, :city, :visits, :visitors]))
  end

end
