function ShowAttractionController ($stateParams, $scope, City, Attraction, Country, Trip) {
  var ctrl = this;

  ctrl.attraction = Attraction.get({ id: $stateParams.id });
  ctrl.cities = City.query();
  ctrl.countries = Country.query();

  /////////////
  // ctrl.trips = Trip.query();
  //
  //
  // ctrl.addToTrip = function() {
  //   ctrl.trip = Trip.get({ id: $scope.trippy });
  //   ctrl.attraction.trips.push(ctrl.trip);
  //   ctrl.attraction.$update(function(result) {
  //     console.log(result);
  //   });
  // };
  /////////////

}

angular
  .module('app')
  .controller('ShowAttractionController', ShowAttractionController);
