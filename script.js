mapboxgl.accessToken = 'pk.eyJ1IjoicHJvamVjdHJhbHBoIiwiYSI6ImNsN3RuYnBzdjB2aXAzd3FtajNxMnloeWwifQ.lAqkCLYZvfRIUU-C5ofmEQ';

navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, {
        enableHighAccuracy: true
    })

function successLocation(position) {
setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-73.968285, 40.785091])

}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/projectralph/cl7tng1ww002j14phyrv29gbh',
        center: center,
        zoom: 11
    });

  const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })
  
  map.addControl(directions, 'top-left');
}
