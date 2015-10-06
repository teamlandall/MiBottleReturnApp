var app = angular.module('bottleReturn');

app.controller('hoarderController', ['$scope', 'getAddress', function($scope, getAddress){
	$scope.submit = function(name, address, qty){
  	getAddress.fromInput(name, address, qty);
  }

}]);