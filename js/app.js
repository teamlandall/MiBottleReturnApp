var app = angular.module('bottleReturn', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
    templateUrl: 'partials/placeHolder.html',
    controller: 'placeHolderController'
  });

  $routeProvider.when('/hoarder', {
    templateUrl: 'partials/hoarder.html',
    controller: 'hoarderController'
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

app.controller('contractorController', ['$scope', 'getNewInfo', function($scope, getNewInfo){

    $scope.databaseOfUsers = getNewInfo.toDisplay();


}]);


app.controller('404Controller', function(){

});

