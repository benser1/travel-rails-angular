function ShowAttractionController ($stateParams, City, Attraction, Country) {
  var ctrl = this;

  ctrl.attraction = Attraction.get({ id: $stateParams.id });
  ctrl.cities = City.query();
  ctrl.countries = Country.query();
}

angular
  .module('app')
  .controller('ShowAttractionController', ShowAttractionController);
