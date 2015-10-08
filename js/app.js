var app = angular.module('bottleReturn', ['ngRoute', 'ui.bootstrap', 'angular-mapbox']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
    templateUrl: 'partials/placeHolder.html',
    controller: 'placeHolderController'
  });

  $routeProvider.when('/hoarderSign-in', {
    templateUrl: 'partials/hoarderSign-in.html',
    controller: 'HoarderSignInController'
  }); 

  $routeProvider.when('/contractorSign-in', {
    templateUrl: 'partials/contractorSign-in.html',
    controller: 'ContractorSignInController'
  });

  $routeProvider.when('/hoarder', {
    templateUrl: 'partials/hoarder.html',
    controller: 'hoarderController'
  });

  $routeProvider.when('/hoarderConfirm', {
    templateUrl: 'partials/hoarderConfirm.html',
    controller: 'hoarderConfirmController'
  });

  $routeProvider.when('/contractor', {
    templateUrl: 'partials/contractor.html',
    controller: 'contractorController'
  });

   $routeProvider.otherwise({
    templateUrl: 'partials/404.html',
    controller: '404controller'
  });

});

app.controller('placeHolderController', function(){


});

app.controller('hoarderConfirmController', function(){

});

// app.controller('mapController', function($scope, $timeout, mapboxService) {
//     mapboxService.init({ accessToken: 'pk.eyJ1Ijoia2tpZW5pbmdlciIsImEiOiJjaWZlM2FpYWg2ZDl4czRtNzZhb3hmcG9nIn0._7XdzBHRCxYnyGhsJgzO2w' });
//     $timeout(function() {
//       var map = mapboxService.getMapInstances()[0];
//       //mapboxService.fitMapToMarkers(map);
//     }, 100);

// });


app.controller('404Controller', function(){

});



