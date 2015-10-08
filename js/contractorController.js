var app = angular.module('bottleReturn');

app.controller('contractorController', ['$scope', 'getNewInfo', 'getSignInContractor', function($scope, getNewInfo, getSignInContractor){

    $scope.userName = getSignInContractor.toDisplay();
    
    $scope.databaseOfUsers = getNewInfo.toDisplay();

}]);