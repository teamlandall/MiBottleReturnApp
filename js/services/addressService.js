var app = angular.module('bottleReturn');

app.factory('getNewInfo', function (){

	var databaseOfUsers = [
   	  { name: "Chris Conley", 
   	  	address: "1247 Woodward Ave, Detroit, MI 48226", 
   	  	date: "October 19, 2015", 
   	  	time: "2:00 PM", 
   	  	lat: "42.333303",
         lng: "-83.048811",
   	  	qty: "89" 
   	  },
   	  { name: "David Soloway", 
   	  	address: "118 W Lafayette Blvd, Detroit, MI 48226", 
   	  	date: "October 19, 2015", 
   	  	time: "3:30 PM",
   	  	lat: "42.331356",
         lng: "-83.049129", 
   	  	qty: "138" 
   	  },
   	  { name: "Eben D'Amico", 
   	  	address: "1250 Library St, Detroit, MI 48226", 
   	  	date: "October 21, 2015", 
   	  	time: "12:00 PM",
   	  	lat: "42.33457",
         lng: "-83.046813", 
   	  	qty: "74" 
   	  },
   	  { name: "Arun Bali", 
   	  	address: "2233 Park Ave, Detroit, MI 48201", 
   	  	date: "October 17, 2015", 
   	  	time: "11:00 PM", 
   	  	lat: "42.337927",
         lng: "-83.054033",
   	  	qty: "91" 
   	  },  
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