function main() {
  var map = new L.Map('map', {
    zoomControl: false,
    center: [25, 0],
    minZoom: 1,
    zoom: 2,
    maxZoom: 3,
  });

  cartodb.createLayer(map, 'http://simbiotica.cartodb.com/api/v2/viz/efb6172c-6a66-11e4-b671-0e853d047bba/viz.json', {
    legends: false,
    time_slider: true
  }).done(function(layer) {
    // add the layer to our map which already contains 1 sublayer
    map.addLayer(layer);
  });

  cartodb.createLayer(map, 'http://simbiotica.cartodb.com/api/v2/viz/5993cdd8-6a67-11e4-b26a-0e9d821ea90d/viz.json', {
    legends: false,
    time_slider: true
  }).done(function(layer) {
    // add the layer to our map which already contains 1 sublayer
    map.addLayer(layer);
  });
}

window.onload = main;