var app = angular.module('bottleReturn');

app.controller('hoarderController', ['$scope', 'getNewInfo', 'getSignInHoarder', function($scope, getNewInfo, getSignInHoarder){
  
  $scope.submit = function(formData){
  	getNewInfo.fromInput(formData);
  }

  $scope.hUserName = getSignInHoarder.toDisplay();

}]);

// Date Picker Controller on Hoarder Partial

app.controller('DatepickerCtrl', function ($scope) {
  $scope.today = function() {
    $scope.date = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.date = null;
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['MMMM dd, yyyy', 'MMMM-dd-yyyy', 'MM/dd/yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
});

// Time Picker Controller on Hoarder Partial

app.controller('TimepickerCtrl', function ($scope, $log) {
  $scope.time = new Date();

  $scope.hstep = 1;
  $scope.mstep = 30;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  // $scope.update = function() {
  //   var d = new Date();
  //   d.setHours( 14 );
  //   d.setMinutes( 0 );
  //   $scope.reservationTime = d;
  // };

  // $scope.changed = function () {
  //   $log.log('Time changed to: ' + $scope.reservationTime);
  // };

  // $scope.clear = function() {
  //   $scope.reservationTime = null;
  // };
});
