function ShowAttractionController ($stateParams, $http, $state, $location, Auth, City, Attraction, Country) {
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
  // ctrl.addVisit = function(attraction){
  //   ctrl.user.visits.push(attraction);
  //   ctrl.user.$update(function(result){
  //     console.log(result);
  //   });
  // };

  // ctrl.logVisited = function(){
  //   $http.post('/attractions/' + ctrl.attraction.id + '/visits').then(function(){
  //     $state.go($state.current, {}, {reload: true});
  //   })
  // }
  //
  // ctrl.checkVisited = function(visitors){
  //   var check;
  //   for (var v in visitors) {
  //     if (v.id == Auth._currentUser.id){
  //       check = true;
  //     }
  //   }
  //   return check;
  // }
}

angular
  .module('app')
  .controller('ShowAttractionController', ShowAttractionController);
