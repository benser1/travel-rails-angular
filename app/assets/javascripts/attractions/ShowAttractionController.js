function ShowAttractionController ($stateParams, $scope, $http, $state, $location, uiGmapGoogleMapApi, Auth, City, Attraction, Country) {

  var ctrl = this;

  ctrl.attraction = Attraction.get({ id: $stateParams.id });
  ctrl.cities = City.query();
  ctrl.countries = Country.query();

  Auth.currentUser()
  .then(function(user){
    ctrl.user = user;
  });

  ctrl.addVisitor = function(user){
    ctrl.attraction.visitors.push(user);
    ctrl.attraction.$update(function(result){
      console.log(result);
    });
    $state.go($state.current, {}, {reload: true});
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
