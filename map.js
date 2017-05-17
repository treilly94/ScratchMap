var map;
var countries = ["'US'", "'GB'", "'DE'"];
var country_str = "ISO_2DIGIT IN (" + countries + ")"

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {
      lat: 41.948766,
      lng: -87.691497
    },
  });

  var world_geometry = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
      where: country_str
    },
    map: map,
    suppressInfoWindows: true
  });
}
