function MapsCtrl($state, $stateParams, $http, $rootScope, uiGmapGoogleMapApi){
  // var ctrl = this;
  //
  // // Define variables for our Map object
  // ctrl.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  var ctrl = this;
  ctrl.stateIsLoading = true;

  ctrl.defaultLat = 44.2126995,
  ctrl.defaultLong = -100.2471641,
  ctrl.zoomA = 6;

  ctrl.visitedList = [];

  ctrl.mapA = { center: { latitude: ctrl.userLat || ctrl.defaultLat, longitude: ctrl.userLong || ctrl.defaultLong }, zoom: ctrl.zoomA };

  navigator.geolocation.getCurrentPosition(function(pos) {
    ctrl.userLat = pos.coords.latitude;
    ctrl.userLong = pos.coords.longitude;
    ctrl.stateIsLoading = false;


    uiGmapGoogleMapApi.then(function(maps) {
      $http.get('/attractions.json')
      .success(function(data, response){
        data.forEach(function(attraction){
          var address = attraction.address + " " + attraction.city + " " + attraction.country + " " + attraction.zip
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
  });
}

angular
.module('app')
.controller('MapsCtrl', MapsCtrl);
