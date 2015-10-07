var app = angular.module('bottleReturn');

app.controller('signInController', ['$scope', 'getSignIn', function($scope, getSignIn){
	$scope.hSignIn = function(input){
  	getSignIn.fromInput(input);
  	}
  	
  	$scope.cSignIn = function(input){
  	getSignIn.fromInput(input);
  	}

}]);