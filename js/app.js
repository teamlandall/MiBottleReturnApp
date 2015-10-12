var app = angular.module('bottleReturn', ['ngRoute', 'ui.bootstrap', 'angular-mapbox', 'mapbox-forward-geo']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
    templateUrl: 'partials/landingView.html',
    controller: 'landingViewController'
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

    //hoarder view. Contractor confirmed pick up.
  $routeProvider.when('/pickUpConfirmed', {
    templateUrl: 'partials/pickUpConfirmed.html',
    controller: 'pickUpConfirmedController'
  });

  $routeProvider.when('/hoarderPayment', {
    templateUrl: 'partials/hoarderPayment.html',
    controller: 'hoarderPaymentController'
  });

  $routeProvider.when('/confirmQty', {
    templateUrl: 'partials/confirmQty.html',
    controller: 'confirmQtyController'
  });

  $routeProvider.when('/contractorPayment', {
    templateUrl: 'partials/contractorPayment.html',
    controller: 'contractorPaymentController'
  });

   $routeProvider.otherwise({
    templateUrl: 'partials/404.html',
    controller: '404controller'
  });

});

app.controller('landingViewController', function(){


});

app.controller('hoarderConfirmController', ['getSignInHoarder', '$scope', function(getSignInHoarder, $scope){
   $scope.hUserName = getSignInHoarder.toDisplay();
}]);

app.controller('pickUpConfirmedController', function(){
  //hoarder view. Contractor confirmed pick up.
});

app.controller('hoarderPaymentController', function(){
  //hoarder view. payment after contractor pick up.
});

app.controller('contractorPaymentController', function(){
  //hoarder view. payment after contractor pick up.
});

app.controller('confirmQtyController', function(){
  //Contractor View. Confirm Qty - Rate the Hoarder.
});


app.controller('404Controller', function(){

});
