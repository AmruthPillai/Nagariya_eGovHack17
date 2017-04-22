// AngularJS App Initialization
var app = angular.module('nagariyaApp', ['ngRoute', 'firebase']);

// Firebase References

// Routes
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/login', {
    templateUrl: 'templates/login.html',
		controller: 'LoginController'
  }).
  when('/home', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  }).
  when('/profile', {
    templateUrl: 'templates/profile.html',
    controller: 'ProfileController'
  }).
  otherwise({
    redirectTo: '/login'
  });

}]);

// Controllers
// Login Controller
app.controller('LoginController', function($scope, $rootScope, $window) {
  $scope.signInWithGoogle = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      $rootScope.loggedInUser = result.user;
      console.log($rootScope.loggedInUser);

      $window.location.assign('#/home');
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;

      alert(errorMessage);
    });
  };

});

// Home Controller
app.controller('HomeController', function($scope, $window) {

});

// Profile Controller
app.controller('ProfileController', function($scope, $rootScope, $window) {

  $scope.displayName = $rootScope.loggedInUser.displayName;

});

// App Logic
$(".button-collapse").sideNav();
