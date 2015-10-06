
L.mapbox.accessToken = 'pk.eyJ1Ijoia2tpZW5pbmdlciIsImEiOiJjaWZlM2FpYWg2ZDl4czRtNzZhb3hmcG9nIn0._7XdzBHRCxYnyGhsJgzO2w';
var map = L.mapbox.map('map', 'kkieninger.cife3agsc6cy9rylxl7ldcgjn')
    .setView([42.347, -83.062], 13)
    .addControl(L.mapbox.geocoderControl('mapbox.places'));

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-83.04483890533447, 42.3358062691065]},
    "properties": {
        "marker-color": "#a3e46b",
        "marker-size": "large",
        "marker-symbol": "waste-basket",
        "name": "Dan Carpenter",
        "address": "351 Gratiot Ave., Detroit MI",
        "bottles": "209"
    }
}
];

// Add custom popups to each using our custom feature properties
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content
		var popupContent =  '<p><b>' + feature.properties.name + ' - ' + feature.properties.address +'</b><br>' +
     					'Bottles for pickup: ' + feature.properties.bottles + '</p>';

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 250,
    });
});

// Add features to the map
myLayer.setGeoJSON(geoJson);