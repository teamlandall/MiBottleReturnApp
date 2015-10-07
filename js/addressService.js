var app = angular.module('bottleReturn');

app.factory('getNewInfo', function (){

	var databaseOfUsers = [
   	  { name: "Chris Conley", 
   	  	address: "1247 Woodward Ave, Detroit, MI 48226", 
   	  	date: "October 19, 2015", 
   	  	time: "2:00 PM", 
   	  	lat: "43",
   	  	lng: "-83",
   	  	qty: "89" 
   	  },
   	  { name: "David Soloway", 
   	  	address: "118 W Lafayette Blvd, Detroit, MI 48226", 
   	  	date: "October 19, 2015", 
   	  	time: "3:30 PM",
   	  	lat: "43.23",
   	  	lng: "-83.9", 
   	  	qty: "138" 
   	  },
   	  { name: "Eben D'Amico", 
   	  	address: "1250 Library St, Detroit, MI 48226", 
   	  	date: "October 21, 2015", 
   	  	time: "12:00 PM",
   	  	lat: "44",
   	  	lng: "-82.5", 
   	  	qty: "74" 
   	  },
   	  { name: "Arun Bali", 
   	  	address: "2233 Park Ave, Detroit, MI 48201", 
   	  	date: "October 17, 2015", 
   	  	time: "11:00 PM", 
   	  	lat: "42",
   	  	lng: "-81",
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