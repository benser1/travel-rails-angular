class Attraction < ActiveRecord::Base

  has_many :visits
  has_many :users, through: :visits
  has_many :trips
  belongs_to :city
  belongs_to :country

  def as_json(options = {})
    super(options.merge(include: [:country]))
  end

end
