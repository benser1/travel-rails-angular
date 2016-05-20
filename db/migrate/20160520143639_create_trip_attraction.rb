class CreateTripAttraction < ActiveRecord::Migration
  def change
    create_table :trip_attractions do |t|
      t.integer :trip_id
      t.integer :attraction_id
    end
  end
end
