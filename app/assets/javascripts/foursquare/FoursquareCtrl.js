function FoursquareCtrl($scope, $http) {

  $scope.$watch('name', function() {
    fetch();
  });

  $scope.name = '';

  function fetch() {
    $http.get("https://api.foursquare.com/v2/venues/search?client_id=11XT4KZISEOIM1TOXNMU5K4UE1YHRDLRGFIRV2LQBSD23DDU&client_secret=X30JWSQIESMYBIRITQMLBALXRCFA2Q0SVGMZWKMMVJMMZAIA&v=20160201&near=Atlanta&query=coffee_shop")
    .then(function(response) {
      $scope.venues = response.data;
    });
  };
}


angular
.module('app')
.controller('FoursquareCtrl', FoursquareCtrl);
