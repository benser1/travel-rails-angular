function ShowCityController ($stateParams, City, Attraction, Country) {
  var ctrl = this;

  ctrl.city = City.get({ id: $stateParams.id });
  ctrl.attractions = Attraction.query();
}

angular
  .module('app')
  .controller('ShowCityController', ShowCityController);
