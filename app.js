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

  var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
});
