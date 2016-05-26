class City < ActiveRecord::Base

  validates :name, presence: true

  belongs_to :country
  has_many :attractions

  def as_json(options = {})
    super(options.merge(include: [:country, :attractions]))
  end

end
