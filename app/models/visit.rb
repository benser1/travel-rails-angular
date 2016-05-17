class Visit < ActiveRecord::Base

  belongs_to :user
  belongs_to :attraction

  def as_json(options = {})
    super(options.merge(include: [:user, :attraction]))
  end

end
