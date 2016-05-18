class Country < ActiveRecord::Base

  has_many :cities

  def as_json(options = {})
    super(options.merge(include: [:cities]))
  end
end
