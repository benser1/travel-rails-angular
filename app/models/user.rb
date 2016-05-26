class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :visits
  has_many :attractions, through: :visits
  has_many :visited_attractions, through: :visits, source: :attraction
  has_many :wishlists
  has_many :attractions, through: :wishlists


  def as_json(options = {})
    super(options.merge(include: [:visits, :wishlists, :attractions, :visited_attractions]))
  end

end
