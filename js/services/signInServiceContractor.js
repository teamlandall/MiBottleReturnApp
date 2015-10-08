var app = angular.module('bottleReturn');

app.factory('getSignInContractor', function (){
	var userName = '';
	return {
		fromInput: function(name){
			userName = name;
		},
		toDisplay: function(){
			return userName;
		},
	}
});