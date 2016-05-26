class Visit < ActiveRecord::Base

  belongs_to :user
  belongs_to :attraction

  validates :attraction_id, uniqueness: { scope: :user_id }

  def as_json(options = {})
    super(options.merge(include: [:user, :attraction]))
  end

end
