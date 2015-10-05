var app = angular.module('bottleReturn');

app.factory('getAddress', function (){
	var fullName = '';
	return {
		fromInput: function(input){
			fullName = input;
		},
		toDisplay: function(){
			return fullName;
		},
		
	}
		
});