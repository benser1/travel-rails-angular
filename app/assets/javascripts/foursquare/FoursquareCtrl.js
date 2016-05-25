function FoursquareCtrl($scope, placesExplorerService, placesPhotosService, $filter, $uibModal, Attraction, Country) {
  $scope.exploreNearby = "New York";
  $scope.exploreQuery = "";
  $scope.filterValue = "";

  $scope.places = [];
  $scope.filteredPlaces = [];
  $scope.filteredPlacesCount = 0;

  //paging
  $scope.totalRecordsCount = 0;
  $scope.pageSize = 10;
  $scope.currentPage = 1;

  init();

  function init() {

    createWatche();
    getPlaces();
  }

  function getPlaces() {

    var offset = ($scope.pageSize) * ($scope.currentPage - 1);

    placesExplorerService.get({ near: $scope.exploreNearby, query: $scope.exploreQuery, limit: $scope.pageSize, offset: offset }, function (placesResult) {

      if (placesResult.response.groups) {
        $scope.places = placesResult.response.groups[0].items;
        $scope.totalRecordsCount = placesResult.response.totalResults;
        filterPlaces('');
      }
      else {
        $scope.places = [];
        $scope.totalRecordsCount = 0;
      }
    });
  };

  function filterPlaces(filterInput) {
    $scope.filteredPlaces = $filter("placeNameCategoryFilter")($scope.places, filterInput);
    $scope.filteredPlacesCount = $scope.filteredPlaces.length;
  }

  function createWatche() {

    $scope.$watch("filterValue", function (filterInput) {
      filterPlaces(filterInput);
    });
  }

  $scope.doSearch = function () {

    $scope.currentPage = 1;
    getPlaces();

  };

  $scope.pageChanged = function (page) {

    $scope.currentPage = page;
    getPlaces();

  };

  $scope.showVenuePhotos = function (venueId, venueName) {

    placesPhotosService.get({ venueId: venueId }, function (photosResult) {

      var modalInstance = $uibModal.open({
        templateUrl: 'foursquare/photos.html',
        controller: 'foursquarePhotosCtrl',
        resolve: {
          venueName: function () {
            return venueName;
          },
          venuePhotos: function () {
            return photosResult.response.photos.items;
          }
        }
      });

      modalInstance.result.then(function () {
        //$scope.selected = selectedItem;
      }, function () {
        //alert('Modal dismissed at: ' + new Date());
      });

    });

  };

  // $scope.buildCategoryIcon = function (icon) {
  //
  //   return icon.prefix + '44' + icon.suffix;
  // };
  //
  $scope.buildVenueThumbnail = function (photo) {

    return photo.items[0].prefix + '128x128' + photo.items[0].suffix;
  };

  var ctrl = this;

  $scope.bookmarkPlace = function(venue) {
    ctrl.country = new Country({name: venue.location.country})
    // var something = ctrl.country.id
    ctrl.country.$save();
    ctrl.countryname = Country.query({ id: venue.location.country.id });
    // ctrl.countryname = ctrl.countryname.id;
    ctrl.attraction = new Attraction({
      name: venue.name,
      address: venue.location.address,
      zip: venue.location.postalCode,
      country_id: ctrl.countryname
      // city_id: 1
    });
    ctrl.attraction.$save();
  }

}


angular
.module('app')
.controller('FoursquareCtrl', FoursquareCtrl);
