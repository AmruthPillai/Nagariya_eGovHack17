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
  otherwise({
    redirectTo: '/home'
  });
}]);

// Controllers
app.controller('HomeController', function($scope) {

});

app.controller('CleanMyCityController', function($scope) {

});
