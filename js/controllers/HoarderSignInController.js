var app = angular.module('bottleReturn');

app.controller('HoarderSignInController', ['$scope', 'getSignInHoarder', function($scope, getSignInHoarder){
	$scope.hSignIn = function(input){
  	getSignInHoarder.fromInput(input);
  	}

  	
  	
}]);