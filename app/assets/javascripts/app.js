angular
  .module('app', ['Devise', 'ui.bootstrap', 'ui.router', 'templates',
   'ngResource', 'uiGmapgoogle-maps', 'ngMessages'])
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyC3KDZfo5MeuO0d86HpOhPej5uBKC5CRJs',
      libraries: 'weather,geometry,visualization'
     });
  })
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'home/main.html',
        controller: 'HomeCtrl'
      })
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl'
        })
        .state('home.newAttraction', {
          url: '/newattraction',
          templateUrl: 'attractions/new.html',
          controller: 'AttractionsCtrl as ctrl'
        })
        .state('home.attractions', {
          url: '/attractions',
          templateUrl: 'attractions/all.html',
          controller: 'AttractionsCtrl as ctrl'
        })
        .state('home.showAttraction', {
          url: '/attractions/:id',
          templateUrl: 'attractions/show.html',
          controller: 'ShowAttractionController as ctrl'
        })
        .state('home.editAttraction', {
          url: '/attractions/:id/edit',
          templateUrl: 'attractions/edit.html',
          controller: 'EditAttractionsCtrl as ctrl'
        })
        .state('home.countries', {
          url: '/countries',
          templateUrl: 'countries/all.html',
          controller: 'CountriesCtrl as ctrl'
        })
        .state('home.newCountry', {
          url: '/newCountry',
          templateUrl: 'countries/new.html',
          controller: 'CountriesCtrl as ctrl'
        })
        .state('home.showCountry', {
          url: '/countries/:id',
          templateUrl: 'countries/show.html',
          controller: 'ShowCountryController as ctrl'
        })
        .state('home.newTrip', {
          url: '/newtrip',
          templateUrl: 'trips/new.html',
          controller: 'TripsCtrl as ctrl'
        })
        .state('home.showTrip', {
          url: '/trips/:id',
          templateUrl: 'trips/show.html',
          controller: 'ShowTripsController as ctrl'
        })
        .state('home.trips', {
          url: '/trips',
          templateUrl: 'trips/all.html',
          controller: 'TripsCtrl as ctrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              $state.go('home');
            })
          }]
        })
        .state('register', {
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              $state.go('home');
            })
          }]
        })
        .state('home.newCity', {
          url: '/newcity',
          templateUrl: 'cities/new.html',
          controller: 'CitiesCtrl as ctrl'
        })
        .state('home.showCity', {
          url: '/cities/:id',
          templateUrl: 'cities/show.html',
          controller: 'ShowCityController as ctrl'
        })
        .state('home.cities', {
          url: '/cities',
          templateUrl: 'cities/all.html',
          controller: 'CitiesCtrl as ctrl'
        })
        .state('home.visited', {
          url: '/visited',
          templateUrl: 'maps/visited.html',
          controller: 'MapsCtrl as ctrl'
        })
        .state('home.wishlist', {
          url: '/wishlist',
          templateUrl: 'maps/wishlist.html',
          controller: 'MapsCtrl as ctrl'
        })
        .state('home.foursquare', {
          url: '/search',
          templateUrl: 'foursquare/search.html',
          controller: 'FoursquareCtrl as ctrl'
        });

        $urlRouterProvider.otherwise('/');
    }]);
