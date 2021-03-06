function FoursquareCtrl($scope, placesExplorerService, placesPhotosService, $filter, $uibModal, Attraction, Country, City) {

  $scope.exploreNearby = "New York";
  $scope.exploreQuery = "";
  $scope.filterValue = "";

  $scope.places = [];
  $scope.filteredPlaces = [];
  $scope.filteredPlacesCount = 0;

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
    });
  };

  $scope.buildCategoryIcon = function (icon) {
    return icon.prefix + 'bg_44' + icon.suffix;
  };

  $scope.buildVenueThumbnail = function (photo) {
    return photo.items[0].prefix + '128x128' + photo.items[0].suffix;
  };

  var ctrl = this;

  $scope.bookmarkPlace = function(venue) {
    ctrl.country = new Country({name: venue.location.country})
    ctrl.country.$save()
    .then(function() {
    ctrl.city = new City({name: venue.location.city, country_id: ctrl.country.id })
    ctrl.city.$save()
      .then(function() {
        ctrl.attraction = new Attraction({
          name: venue.name,
          address: venue.location.address,
          zip: venue.location.postalCode,
          country_id: ctrl.country.id,
          city_id: ctrl.city.id
        });
        ctrl.attraction.$save();
      });
    });
  };
  $(document).on("click", "#bookmarkButton", function(){
   $('.alert').show().fadeOut(5000);
 });
}

angular
.module('app')
.controller('FoursquareCtrl', FoursquareCtrl);
