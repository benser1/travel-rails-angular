class Attraction < ActiveRecord::Base

  validates :name, presence: true
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
