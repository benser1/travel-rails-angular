function AttractionsCtrl($location, Attraction, Country, City){
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

  // ctrl.deleteAttraction = function(attraction) {
  //   ctrl.attraction.$delete(function(attraction) {
  //     console.log('successfully deleted');
  //   });
  // };


}

angular
  .module('app')
  .controller('AttractionsCtrl', AttractionsCtrl);
