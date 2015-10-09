var app = angular.module('bottleReturn');

app.controller('contractorConfirmController',['$scope', 'getSignInContractor', 'reserveHoarder', 'getSignInHoarder',
	function($scope, getSignInContractor, reserveHoarder, getSignInHoarder){
		
  $scope.userName = getSignInContractor.toDisplay();

  $scope.hUserName = getSignInHoarder.toDisplay();

  $scope.reservedHoarder = reserveHoarder.toDisplay();

}]);