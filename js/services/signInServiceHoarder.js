var app = angular.module('bottleReturn');

app.factory('getSignInHoarder', function (){
	var hUserName = '';
	return {
		fromInput: function(name){
			hUserName = name;
		},
		toDisplay: function(){
			return hUserName;
		},
	}
});