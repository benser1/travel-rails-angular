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
        .state('home.countries', {
          url: '/countries',
          templateUrl: 'countries/all.html',
          controller: 'CountriesCtrl as ctrl'
        })
        .state('home.newCountry', {
          url: '/newCountry',
          templateUrl: 'countries/new.html',
          controller: 'CountriesCtrl as ctrl'
        });

        $urlRouterProvider.otherwise('home');
    }]);
