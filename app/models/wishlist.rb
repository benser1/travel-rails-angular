class Wishlist < ActiveRecord::Base

  belongs_to :user
  belongs_to :attraction

  validates :attraction_id, uniqueness: { scope: :user_id }
end
