function TripsCtrl($location, Trip, Auth){
  var ctrl = this;

  ctrl.trip = new Trip();
  ctrl.trips = Trip.query();

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
      ctrl.trip.user_id = user.id;
    });

  ctrl.addTrip = function() {
    ctrl.trip.$save(function() {
      $location.path('/home/trips');
    });
  };
}


angular
  .module('app')
  .controller('TripsCtrl', TripsCtrl);
