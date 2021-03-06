function ShowAttractionController ($stateParams, $http, $state, $location, uiGmapGoogleMapApi, Auth, City, Attraction, Country) {

  var ctrl = this;

  ctrl.attraction = Attraction.get({ id: $stateParams.id });
  ctrl.cities = City.query();
  ctrl.countries = Country.query();

  Auth.currentUser()
  .then(function(user){
    ctrl.user = user;
  });

  ctrl.addVisitor = function(user){
    $http.post('/attractions/' + ctrl.attraction.id + '/visited');
  };

  ctrl.addWishlist = function(user){
    $http.post('/attractions/' + ctrl.attraction.id + '/wishes');
  };

  ctrl.deleteAttraction = function(attraction) {
    ctrl.attraction.$delete(function(attraction) {
      $location.path('/home/attractions');
    });
  };
}

angular
  .module('app')
  .controller('ShowAttractionController', ShowAttractionController);
