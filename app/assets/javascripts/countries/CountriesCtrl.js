function CountriesCtrl($location, Country){
  var ctrl = this;

  ctrl.country = new Country();
  ctrl.countries = Country.query();

  ctrl.addCountry = function() {
    ctrl.country.$save(function() {
      $location.path('/home/countries');
    });
  };
}

angular
  .module('app')
  .controller('CountriesCtrl', CountriesCtrl);
