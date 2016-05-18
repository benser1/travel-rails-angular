function VisitsCtrl($location, Visit){
  var ctrl = this;

  ctrl.visit = new Visit();
  ctrl.visits = Visit.query();

  ctrl.addVisit = function() {
    ctrl.visit.$save(function() {
      $location.path('/home/visits');
    });
  };
}

angular
  .module('app')
  .controller('VisitsCtrl', VisitsCtrl);
