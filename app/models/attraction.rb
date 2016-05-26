class Attraction < ActiveRecord::Base

  validates :name, presence: true
  # validates_format_of :zip,
  #                 with: /\A\d{5}-\d{4}|\A\d{5}\z/,
  #                 message: "should be 12345 or 12345-1234"
  validates :address, presence: true, uniqueness: true
  validates :zip, presence: true



  has_many :visits
  has_many :users, through: :visits
  belongs_to :city
  belongs_to :country
  belongs_to :user
  has_many :visitors, through: :visits, source: :user
  has_many :wishes, through: :wishlists, source: :user
  has_many :wishlists
  has_many :users, through: :wishlists

  def as_json(options = {})
    super(options.merge(include: [:country, :city, :visits, :visitors, :wishlists]))
  end

end
