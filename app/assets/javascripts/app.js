angular
  .module('app', ['Devise', 'ui.router', 'templates', 'ngResource'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
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
        .state('home.newTrip', {
          url: '/newtrip',
          templateUrl: 'trips/new.html',
          controller: 'TripsCtrl as ctrl'
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
        });

        $urlRouterProvider.otherwise('home');
    }]);
