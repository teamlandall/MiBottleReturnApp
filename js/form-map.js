L.mapbox.accessToken = 'pk.eyJ1Ijoia2tpZW5pbmdlciIsImEiOiJjaWZlM2FpYWg2ZDl4czRtNzZhb3hmcG9nIn0._7XdzBHRCxYnyGhsJgzO2w';
var map = L.mapbox.map('map', 'kkieninger.nl3n4cd3', {
    scrollWheelZoom: true
})
    .setView([42.347, -83.062], 13);

var coordinates = document.getElementById('coordinates');

var marker = L.marker([42.335923, -83.049803], {
    icon: L.mapbox.marker.icon({
      'marker-color': '#f86767'
    }),
    draggable: true
}).addTo(map);

// every time the marker is dragged, update the coordinates container
marker.on('dragend', ondragend);

// Set the initial marker coordinate on load.
ondragend();

// function ondragend() {
//     var m = marker.getLatLng();
//     coordinates.innerHTML = 'Latitude: ' + m.lat + '<br />Longitude: ' + m.lng;
// }

function ondragend() {
    var m = marker.getLatLng();
    coordinates.innerHTML = '<input ng-model="data.lat" type="number" class="form-control" id="form" placeholder="Drag location marker to populate" value="' + m.lat +'">' + '<input ng-model="data.lng" type="number" class="form-control" id="form" placeholder="Drag location marker to populate" value="' + m.lng +'">';
}

