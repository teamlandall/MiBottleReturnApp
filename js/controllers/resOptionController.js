var app = angular.module('bottleReturn');

app.controller('resOptionController', ['$scope', 'getNewInfo', 'getSignInContractor', 'resOption', 'reserveHoarder',
	function($scope, getNewInfo, getSignInContractor, resOption, reserveHoarder){

    $scope.userName = getSignInContractor.toDisplay();
    
    $scope.selectedUser = resOption.toDisplay();

    $scope.reserve = function(input){
  	reserveHoarder.fromInput(input);
   	}

}]);