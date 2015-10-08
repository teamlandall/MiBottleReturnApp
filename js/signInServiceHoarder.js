var app = angular.module('bottleReturn');

app.factory('getSignInHoarder', function (){
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