var app = angular.module('nagariyaApp', ['ngRoute']);

// Routes
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'templates/home.html',
		controller: 'HomeController'
  }).
  when('/cleanmycity', {
    templateUrl: 'templates/cleanmycity.html',
		controller: 'CleanMyCityController'
  }).
  when('/about', {
    templateUrl: 'templates/about.html',
		controller: 'AboutController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);

// Controllers
app.controller('HomeController', function($scope) {

});

app.controller('CleanMyCityController', function($scope) {

});
