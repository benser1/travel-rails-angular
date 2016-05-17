function AttractionsCtrl($location, Attraction, Country, City, $scope){
  var ctrl = this;

  ctrl.countries = Country.query();
  ctrl.cities = City.query();

  ctrl.attraction = new Attraction();
  ctrl.attractions = Attraction.query();
///////////////
    // $scope.options1 = ctrl.countries;
    // $scope.options2 = [];
    // $scope.getOptions2 = function(){
    //   var key = $scope.options1.indexOf($scope.option1);
    //
    //   var myNewOptions = ctrl.countries[key];
    //   $scope.options2 = myNewOptions;
    // }

////////////////////////
  ctrl.addAttraction = function() {
    ctrl.attraction.$save(function() {
      $location.path('/home/attractions');
    });
  };

}

angular
  .module('app')
  .controller('AttractionsCtrl', AttractionsCtrl);
