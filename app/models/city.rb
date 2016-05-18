class City < ActiveRecord::Base

  belongs_to :country
  has_many :attractions

  def as_json(options = {})
    super(options.merge(include: [:country, :attractions]))
  end

end
