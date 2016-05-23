class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  has_many :trips
  has_many :attractions
  has_many :visits
  has_many :attractions, through: :visits
  has_many :visited_attractions, through: :visits, source: :attraction


  def as_json(options = {})
    super(options.merge(include: [:trips, :visits]))
  end

end
