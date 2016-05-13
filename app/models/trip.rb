class Trip < ActiveRecord::Base

  belongs_to :user
  has_many :attractions
  has_many :countries
  has_many :cities

  def as_json(options = {})
    super(options.merge(include: [:user]))
  end

end
