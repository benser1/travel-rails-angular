function ShowTripsController ($stateParams, Trip) {
  var ctrl = this;

  ctrl.trip = Trip.get({ id: $stateParams.id });

}

angular
  .module('app')
  .controller('ShowTripsController', ShowTripsController);
