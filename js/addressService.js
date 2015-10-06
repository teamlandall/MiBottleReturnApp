var app = angular.module('bottleReturn');

app.factory('getNewInfo', function (){
	
	var databaseOfUsers = [
   	  { name: "Chris Conley", address: "1247 Woodward Ave, Detroit, MI 48226", qty: "89" },
   	  { name: "David Soloway", address: "118 W Lafayette Blvd, Detroit, MI 48226", qty: "138" },
   	  { name: "Eben D'Amico", address: "1250 Library St, Detroit, MI 48226", qty: "74" },
   	  { name: "Arun Bali", address: "2233 Park Ave, Detroit, MI 48201", qty: "91" },  
  	];

	return {
		fromInput: function(data){
			databaseOfUsers.push(data);
		},
		toDisplay: function(){
			return databaseOfUsers;
		},
	}
		
});