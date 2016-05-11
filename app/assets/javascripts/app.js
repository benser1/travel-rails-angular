angular
  .module('app', ['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl'
        });

        $urlRouterProvider.otherwise('home');
    }])
