var app = angular.module('bottleReturn');

app.controller('hoarderController', ['$scope', 'getNewInfo', function($scope, getNewInfo){
	$scope.submit = function(formData){
  	getNewInfo.fromInput(formData);
  }

}]);


