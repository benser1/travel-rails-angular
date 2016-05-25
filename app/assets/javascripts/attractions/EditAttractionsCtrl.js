function EditAttractionsCtrl($location, Attraction, Country, City, $stateParams){
  var ctrl = this;

  ctrl.attraction = Attraction.get({ id: $stateParams.id });
  ctrl.countries = Country.query();
  ctrl.cities = City.query();

  ctrl.updateAttraction = function() {
    ctrl.attraction.$update(function() {
      $location.path('/home/attractions');
    });
  };
}

angular
.module('app')
.controller('EditAttractionsCtrl', EditAttractionsCtrl);
