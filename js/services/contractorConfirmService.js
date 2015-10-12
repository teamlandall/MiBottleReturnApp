var app = angular.module('bottleReturn');

app.factory('reserveHoarder', function (){
	var reservedHoarder = [];

	return {
		fromInput: function(data){
			reservedHoarder.push(data);
			console.log(reservedHoarder);
		},
		toDisplay: function(){
			return reservedHoarder;
		},	
	}
		
});

