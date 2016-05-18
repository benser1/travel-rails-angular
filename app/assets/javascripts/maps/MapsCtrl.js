function MapsCtrl(uiGmapGoogleMapApi, $scope){
  var ctrl = this;

  // Define variables for our Map object
  ctrl.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
}

angular
  .module('app')
  .controller('MapsCtrl', MapsCtrl);
