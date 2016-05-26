class Country < ActiveRecord::Base

  validates :name, presence: true

  has_many :cities

  def as_json(options = {})
    super(options.merge(include: [:cities]))
  end
end
