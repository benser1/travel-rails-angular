function AttractionsCtrl($location, Attraction, Country, City, Trip, $scope){
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
////////////// Need to be able to get Trip dynamically through the form!!! /////////
  //ctrl.trip = Trip.find(params[4]);  //try something like this
  ctrl.trip = Trip.get({ id: 5 });
  ctrl.trips = Trip.query();


  ctrl.addToTrip = function(attraction) {
    //ctrl.trip = Trip.get({ id: 5 });
    ctrl.trip.attractions.push(attraction);
    ctrl.trip.$update(function(result) {
      console.log(result);
    });
  };


/////////

// ctrl.trips = Trip.query();
// ctrl.trip = Trip.get({ id: 3 });
//
//
// ctrl.addToTrip = function(attraction) {
//   ctrl.trip.attractions.push(attraction);
//   ctrl.attraction.$update(function(result) {
//     console.log(result);
//   });
// };

  // ctrl.deleteAttraction = function(attraction) {
  //   ctrl.attraction.$delete(function(attraction) {
  //     console.log('successfully deleted');
  //   });
  // };


}

angular
  .module('app')
  .controller('AttractionsCtrl', AttractionsCtrl);
