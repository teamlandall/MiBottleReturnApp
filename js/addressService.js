var app = angular.module('bottleReturn');

app.factory('getAddress', function (){
	var newFullName = '';
	var newAddress = '';
	var newQty = '';
	return {
		fromInput: function(name, address, qty){
			newFullName = name;
			newAddress = address;
			newQty = qty;
		},
		toDisplayName: function(){
			return newFullName;
		},
		toDisplayAddress: function(){
			return newAddress;
		},
		toDisplayQty: function(){
			return newQty;
		},
	}
		
});