function AttractionsCtrl($location, Attraction, Country, City, Trip, $scope, $stateParams, $http){
  var ctrl = this;

  ctrl.countries = Country.query();
  ctrl.cities = City.query();


  ctrl.attraction = new Attraction();
  ctrl.attractions = Attraction.query();

  ctrl.addAttraction = function() {
    ctrl.attraction.$save(function() {
      $location.path('/home/attractions');
    });
  };
}

angular
.module('app')
.controller('AttractionsCtrl', AttractionsCtrl);
