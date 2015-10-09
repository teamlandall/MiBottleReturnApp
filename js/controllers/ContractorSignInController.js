var app = angular.module('bottleReturn');

app.controller('ContractorSignInController', ['$scope', 'getSignInContractor', function($scope, getSignInContractor){
	
  	$scope.cSignIn = function(input){
  	getSignInContractor.fromInput(input);
  	}

}]);