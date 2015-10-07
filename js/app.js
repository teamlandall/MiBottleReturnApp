var app = angular.module('bottleReturn', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
    templateUrl: 'partials/placeHolder.html',
    controller: 'placeHolderController'
  });

  $routeProvider.when('/sign-in', {
    templateUrl: 'partials/sign-in.html',
    controller: 'signInController'
  });

  $routeProvider.when('/hoarder', {
    templateUrl: 'partials/hoarder.html',
    controller: 'hoarderController'
  });

  $routeProvider.when('/hoarderConfirm', {
    templateUrl: 'partials/hoarderConfirm.html',
    controller: 'hoarderConfirmController'
  });

  $routeProvider.when('/contractor', {
    templateUrl: 'partials/contractor.html',
    controller: 'contractorController'
  });

   $routeProvider.otherwise({
    templateUrl: 'partials/404.html',
    controller: '404controller'
  });

});

app.controller('placeHolderController', function(){

});

app.controller('hoarderConfirmController', function(){

});

app.controller('contractorController', ['$scope', 'getNewInfo', 'getSignIn', function($scope, getNewInfo, getSignIn){

    $scope.userName = getSignIn.toDisplay();
    
    $scope.databaseOfUsers = getNewInfo.toDisplay();

}]);


app.controller('404Controller', function(){

});

