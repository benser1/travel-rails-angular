class CreateAttractions < ActiveRecord::Migration
  def change
    create_table :attractions do |t|
      t.string :name
      t.string :address
      t.string :zip
      t.integer :country_id
      t.integer :city_id

      t.timestamps null: false
    end
  end
end
