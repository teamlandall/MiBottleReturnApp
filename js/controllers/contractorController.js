var app = angular.module('bottleReturn');

app.controller('contractorController', ['$scope', 'getNewInfo', 'getSignInContractor', 'resOption',
	function($scope, getNewInfo, getSignInContractor, resOption){

    $scope.userName = getSignInContractor.toDisplay();
    
    $scope.databaseOfUsers = getNewInfo.toDisplay();

    $scope.mapSubmit = function(input){
  	resOption.fromInput(input);
   	}

   	$scope.tblSubmit = function(input){
  	resOption.fromInput(input);
   	}

}]);