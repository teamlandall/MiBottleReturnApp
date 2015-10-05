var app = angular.module('bottleReturn');

app.controller('hoarderController', ['$scope', 'getAddress', function($scope, getAddress){
	$scope.submit = function(x){
  	getAddress.fromInput(x);
  }

}]);