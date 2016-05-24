class DropTripAttractionsTable < ActiveRecord::Migration
  def change
    drop_table :trip_attractions
  end
end
