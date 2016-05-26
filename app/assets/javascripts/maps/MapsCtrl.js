function MapsCtrl($state, $stateParams, $http, $rootScope, uiGmapGoogleMapApi, Attraction, Auth){
  var ctrl = this;
  ctrl.stateIsLoading = true;

  ctrl.defaultLat = 44.2126995,
  ctrl.defaultLong = -100.2471641,
  ctrl.zoom = 3;

  ctrl.visitedList = [];
  ctrl.wishList = [];
  ctrl.attractions = Attraction.query();

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
    });

  navigator.geolocation.getCurrentPosition(function(pos) {
    ctrl.userLat = pos.coords.latitude;
    ctrl.userLong = pos.coords.longitude;
    ctrl.stateIsLoading = false;

    uiGmapGoogleMapApi.then(function(maps) {

      ctrl.map = { center: { latitude: ctrl.userLat || ctrl.defaultLat, longitude: ctrl.userLong || ctrl.defaultLong }, zoom: ctrl.zoom };

      $http.get('/users/' + ctrl.user.id + '/visited.json')
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

      $http.get('/users/' + ctrl.user.id + '/wishlist.json')
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
              ctrl.wishList.push(mapData);
            }
          });
        })
      })
    })
  })
}

angular
.module('app')
.controller('MapsCtrl', MapsCtrl);
