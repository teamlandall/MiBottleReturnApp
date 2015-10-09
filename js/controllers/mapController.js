var app = angular.module('bottleReturn');

app.controller('mapController', function($scope, $timeout, mapboxService) {
    mapboxService.init({ accessToken: 'pk.eyJ1Ijoia2tpZW5pbmdlciIsImEiOiJjaWZlM2FpYWg2ZDl4czRtNzZhb3hmcG9nIn0._7XdzBHRCxYnyGhsJgzO2w' });
    $timeout(function() {
      var map = mapboxService.getMapInstances()[0];
      //mapboxService.fitMapToMarkers(map);
    }, 100);

});