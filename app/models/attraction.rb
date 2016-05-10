class Attraction < ActiveRecord::Base

  has_many :visits
  has_many :users, through: :visits
  belongs_to :city
  belongs_to :country


end
