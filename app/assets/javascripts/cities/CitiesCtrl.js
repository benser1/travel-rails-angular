function CitiesCtrl($location, City, Country){
  var ctrl = this;

  ctrl.city = new City();
  ctrl.cities = City.query();

  ctrl.countries = Country.query();

  ctrl.addCity = function() {
    ctrl.city.$save(function() {
      $location.path('/home/cities');
    });
  };
}

angular
  .module('app')
  .controller('CitiesCtrl', CitiesCtrl);
