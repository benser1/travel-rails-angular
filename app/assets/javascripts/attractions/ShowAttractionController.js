function ShowAttractionController ($stateParams, $scope, $rootScope, $http, $state, $location, uiGmapGoogleMapApi, Auth, City, Attraction, Country) {

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

  ctrl.stateIsLoading = true;

  ctrl.defaultLat = 44.2126995,
  ctrl.defaultLong = -100.2471641,
  ctrl.zoomA = 3;

  ctrl.visitedList = [];

  navigator.geolocation.getCurrentPosition(function(pos) {
    ctrl.userLat = pos.coords.latitude;
    ctrl.userLong = pos.coords.longitude;
    ctrl.stateIsLoading = false;

    uiGmapGoogleMapApi.then(function(maps) {

      ctrl.mapA = { center: { latitude: ctrl.userLat || ctrl.defaultLat, longitude: ctrl.userLong || ctrl.defaultLong }, zoom: ctrl.zoomA };

      $http.get('/attractions.json')
      .success(function(data, response){
        data.forEach(function(attraction){
          var address = attraction.address + " " + attraction.city.name + " " + attraction.country.name + " " + attraction.zip
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode( { "address": address }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
              var mapData = {};
              mapData["id"] = attraction.id
              mapData["options"] = {labelContent: attraction.name}
              mapData["coords"] = {}
              mapData["coords"]["latitude"] = results[0].geometry.location.lat()
              mapData["coords"]["longitude"] = results[0].geometry.location.lng()
              ctrl.visitedList.push(mapData);
            }
          });
        })
      })
    })
  })


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
