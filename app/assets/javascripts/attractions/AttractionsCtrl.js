function AttractionsCtrl($location, Attraction, Country){
  var ctrl = this;

  ctrl.countries = Country.query();

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
