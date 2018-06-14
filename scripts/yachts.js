// MB Public Token
mapboxgl.accessToken = "pk.eyJ1IjoiY2l0cnVzdmFuaWxsYSIsImEiOiJjamE3b2tueXFhd25lMndwYTB2aGV6eGZ2In0.tv8tWP5uRintGND3jX49aA";

// Map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/citrusvanilla/cjg4nb4bw0rvm2soz2engacpi",
  maxZoom: 9,
  minZoom: 1,
  center: [0.0, 20.0]
});

// GPS Data
//var gpsDataPtsFile = "data/combined2pts.geojson";
var gpsDataLineFile = "data/routes.geojson";
var gpsDataPts;
var gpsDataLine;
//d3.json(gpsDataPtsFile, function(collection) {gpsDataPts = collection;});
d3.json(gpsDataLineFile, function(collection) {gpsDataLine = collection;});

// Map interaction vars
var boat = "none";
var currentLayer = "zipcodes";
var route_clicked = false;


// Info Panel vars
var info = d3.select("#info");
var infoGraph = d3.select("#info-popgraph");
var nta_clicked = false;

// Yacht Data
var yachtDataFile = "data/yachtinfo.json";
var yachtData;
d3.json(yachtDataFile, function(collection) {yachtData = collection;});



// Update Story Mode panel.
function updateStory(storyObj) {
  
  // Story vars.
  var title = storyObj['title'];
  var description = storyObj['narrative'];
  var cameraSettings = storyObj['camera'];

  // Update the Storymode content.
  storyHeader.text(title);
  storyContent.text(description);

  // Update Camera.
  map.flyTo(cameraSettings);
};

// Update the Info panel.
function updateInfo(feature) {

  // Determine if provider or neighborhood.
  if (feature.properties.group) { // ZIPCODE FEATURE

    // Stats.
    var boatName = feature.properties.group;

    // Change Info Header.
    d3.select("#info-header").text(boatName);


  } else {
    
    console.log("nothing");
    // Change Info Header.
    d3.select("#info-header").text("");

  }
}

function resetInfo() {

  // Change Info Header.
  d3.select("#info-header").text("");

}

// Define map behavior and callback functions.
map.on("load", function(e) {

  // Add zipcodes-dimmed.
  map.addLayer({
    "id": "yacht-lines-dimmed",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": gpsDataLine},
    "paint": {"line-width" : 2,
              "line-color": ['get', 'color'],
              "line-opacity": 0.3},
  });

  map.addLayer({
    "id": "yacht-lines-highlighted",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": gpsDataLine},
    "filter" : ["in", "group", ""],
    "paint": {"line-width" : 2,
              "line-color": ['get', 'color'],
              "line-opacity": 0.85},
  });


  // Mouse-move interatction for zipcodes.
  map.on('mousemove', 'yacht-lines-dimmed', function(e) {
    
    // Interactive Cursor.
    map.getCanvas().style.cursor = 'pointer';

    if (!route_clicked) {

      // Single out the first found feature.
      var feature = e.features[0];

      // Get the feature's zipcode ("ZIPCODE").
      boat = feature.properties.group;

      // Filter map overlay for the NTA.
      map.setFilter('yacht-lines-highlighted', ['in', 'group', boat]);

      // Update the info panel.
      updateInfo(feature);
      }
    }
  );

  map.on('mouseleave', 'yacht-lines-dimmed', function(e) {

    // Change the cursor style again.
    map.getCanvas().style.cursor = '';

    if (!route_clicked) {

      // Clear Filters.
      map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
      map.setFilter('yacht-lines-dimmed', null);

    // Update info panel with Manhattan data.
    resetInfo();

    }
  });


  // Callback for STATS overlay mouse click.
  map.on('click', function(e) {

    var bbox = [[(e.point.x-5), (e.point.y-5)], 
                [(e.point.x+5), (e.point.y+5)]];

    // Search for feature in both highlighted and dimmed layers.
    var features = map.queryRenderedFeatures(bbox,
                                             {layers: ['yacht-lines-highlighted',
                                                       'yacht-lines-dimmed']});

    // If feature found...
    if (features.length) {
      
      // Map overlay focus.
      route_clicked = true;

      // Turn hightlighted map feature.
      boat = features[0].properties.group;
      map.setFilter('yacht-lines-highlighted', ['in', 'group', boat]);

      // Update panel.
      updateInfo(feature);


    } else { // No feature found.
      
      // Clear focus, clear feature.
      route_clicked = false;
      map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);


      // Update info panel with Manhattan data.
      resetInfo();
    }
  });



});

// Set default map cursor to a hand.
map.getCanvas().style.cursor = "default";

