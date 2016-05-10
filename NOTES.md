-user
  -has_many trips

-country
  -has_many cities
  -table
    -name
  -later-table
    -languages
    -currency (converter?)
    -population(fun facts)

-city
  -belongs_to country
  -has_many attractions
  -table
    -name
    -country_id

<!-- -destination  -- join table
  -belongs_to city
  -belongs_to country -->


-attraction
  -has_many users
  -belongs_to city
  -belongs_to country
  -table
    -name
    -address
    -zip
    -country_id
    -city_id

-trip
  -summer2k16 -- winter2k17
  -belongs_to :user
  -has_many attractions
  -has_many countries
  -has_many cities
  -table
    -name
    -user_id

-visit
  -table
    -user_id
    -attraction_id




----------------------------------------

-upvotes /down

-comments

-map -- visited/desired

-photo album

-foursquare to search and add attractions