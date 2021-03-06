angular.module('MessengerApp', ['ui.router', 'ngMaterial']).config(function( $stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/templates/home.html',
    controller: 'MainController',
    controllerAs: 'vm'
  }).state('skills', {
     url: '/skills',
     templateUrl: '/templates/skills.html'
  }).state('contact', {
     url: '/contact',
     templateUrl: '/templates/contact.html'
  })
  $urlRouterProvider.otherwise('/');
});
