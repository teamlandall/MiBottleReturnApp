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

  $routeProvider.when('/resOption', {
    templateUrl: 'partials/resOption.html',
    controller: 'resOptionController'
  });

  $routeProvider.when('/contractorConfirm', {
    templateUrl: 'partials/contractorConfirm.html',
    controller: 'contractorConfirmController'
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


app.controller('404Controller', function(){

});



