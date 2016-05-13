angular
  .module('app', ['ui.router', 'templates', 'ngResource'])
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
        .state('home.newTrip', {
          url: '/newtrip',
          templateUrl: 'trips/new.html',
          controller: 'TripsCtrl as ctrl'
        })
        .state('home.trips', {
          url: '/trips',
          templateUrl: 'trips/all.html',
          controller: 'TripsCtrl as ctrl'
        });

        $urlRouterProvider.otherwise('home');
    }]);
