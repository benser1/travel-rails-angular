function AttractionsCtrl($location, Attraction){
  var ctrl = this;

  ctrl.attraction = new Attraction();
  ctrl.attractions = Attraction.query();

  ctrl.addAttraction = function() {
    ctrl.attraction.$save(function() {
      $location.path('attractions');
    });
  };
}

angular
  .module('app')
  .controller('AttractionsCtrl', AttractionsCtrl);
