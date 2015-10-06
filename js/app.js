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

app.controller('contractorController', ['$scope', 'getAddress', function($scope, getAddress){
  $scope.name = getAddress.toDisplayName();
  $scope.address = getAddress.toDisplayAddress();
	$scope.qty = getAddress.toDisplayQty();
  
	$scope.databaseOfUsers = [
   	  { name: "Chris Conley", address: "1247 Woodward Ave, Detroit, MI 48226", qty: "89" },
   	  { name: "David Soloway", address: "118 W Lafayette Blvd, Detroit, MI 48226", qty: "138" },
   	  { name: "Eben D'Amico", address: "1250 Library St, Detroit, MI 48226", qty: "74" },
   	  { name: "Arun Bali", address: "2233 Park Ave, Detroit, MI 48201", qty: "91" },  
  	];
}]);


app.controller('404Controller', function(){

});

