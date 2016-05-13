function TripsCtrl($location, Trip){
  var ctrl = this;

  ctrl.trip = new Trip();
  ctrl.trips = Trip.query();

  ctrl.addTrip = function() {
    ctrl.trip.$save(function() {
      $location.path('/home/trips');
    });
  };
}


angular
  .module('app')
  .controller('TripsCtrl', TripsCtrl);
