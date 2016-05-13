function ShowCountryController ($stateParams, Country, City) {
  var ctrl = this;

  ctrl.country = Country.get({ id: $stateParams.id });
  ctrl.cities = City.query();
}

angular
  .module('app')
  .controller('ShowCountryController', ShowCountryController);
