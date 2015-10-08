var app = angular.module('bottleReturn');

app.factory('resOption', function (){
	var selectedUser = [];

	return {
		fromInput: function(data){
			selectedUser.push(data);
		},
		toDisplay: function(){
			return selectedUser;
		},	
	}
		
});
