var app = angular.module('nagariyaApp', ['ngRoute', 'firebase']);

var postsRef = firebase.database().ref().child("posts");

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
  when('/cleanmycity/newpost', {
    templateUrl: 'templates/cleanmycity/new-post.html',
		controller: 'CleanMyCityNewPostController'
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

app.controller('CleanMyCityController', function($scope, $http, $firebaseArray) {
  $scope.posts = $firebaseArray(postsRef);

  $scope.dismissDialog = function () {
    $('#cmc-jumbo-dialog').css("display", "none");
  };

  $scope.incrementCount = function (post) {
    post.count = post.count + 1;
  };
});
