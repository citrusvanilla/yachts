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
var gpsDataLineFile = "data/routes_by_month.json";
var gpsDataPts;
var gpsDataLine;

// Colors
var colors = {"ATTESSA IV": "#1C86EE",
              "DILBAR": "#E31A1C",
              "ECLIPSE": "#008B00",
              "HIGHLANDER": "#6A3D9A",
              "LADY S": "#FF7F00",
              "LIMITLESS": "#FFD700",
              "LIONHEART": "#7ec0ee",
              "MAIN": "#FB9A99",
              "MUSASHI": "#90ee90",
              "NAHLIN": "#CAB2D6",
              "OCTOPUS": "#FDBF6F",
              "RISING SUN": "#eee685",
              "SAILING YACHT A": "#800000",
              "SEVEN SEAS": "#e066ff",
              "SKAT": "#FF1493",
              "SYMPHONY": "#0000ff",
              "VAVA II": "#36648b",
              "VENUS": "#00ced1"};


// Load lines and add colors.
d3.json(gpsDataLineFile, function(collection) {
  gpsDataLine = collection;
  for (var i = 0; i < gpsDataLine.length; i++) {
    for (var j = 0; j < gpsDataLine[i]['features'].length; j++) {
      gpsDataLine[i]['features'][j]['properties']['color'] = colors[gpsDataLine[i]['features'][j]['properties']['group']];
    }
  }
});


// Map interaction vars
var boat = "none";
var currentLayer = "zipcodes";
var route_clicked = false;

// Sidebar vars
var cb1 = d3.select("#y1cb");
var cb2 = d3.select("#y2cb");
var cb3 = d3.select("#y3cb");
var cb4 = d3.select("#y4cb");
var cb5 = d3.select("#y5cb");
var cb6 = d3.select("#y6cb");
var cb7 = d3.select("#y7cb");
var cb8 = d3.select("#y8cb");
var cb9 = d3.select("#y9cb");
var cb10 = d3.select("#y10cb");
var cb11 = d3.select("#y11cb");
var cb12 = d3.select("#y12cb");
var cb13 = d3.select("#y13cb");
var cb14 = d3.select("#y14cb");
var cb15 = d3.select("#y15cb");
var cb16 = d3.select("#y16cb");
var cb17 = d3.select("#y17cb");
var cb18 = d3.select("#y18cb");
var cbn = d3.selectAll(".cbn");

// Slider vars
var interval;
var sliding;
var value = 0;

// Info Panel vars
var info = d3.select("#info");
var infoGraph = d3.select("#info-popgraph");
var nta_clicked = false;

// Yacht Data
//var yachtDataFile = "data/yachtinfo.json";
//var yachtData;
//d3.json(yachtDataFile, function(collection) {yachtData = collection;});

// Helper Functions

// Helper Functions
function monthFormatter(t) {
  
  var dt;
  
  if(t == 0) dt = 'ALL';
  if(t == 1) dt = 'JAN';
  if(t == 2) dt = 'FEB';
  if(t == 3) dt = 'MAR';
  if(t == 4) dt = 'APR';
  if(t == 5) dt = 'MAY';
  if(t == 6) dt = 'JUN';
  if(t == 7) dt = 'JUL';
  if(t == 8) dt = 'AUG';
  if(t == 9) dt = 'SEP';
  if(t == 10) dt = 'OCT';
  if(t == 11) dt = 'NOV';
  if(t == 12) dt = 'DEC';

  return dt;
}


// Build sliders and set callbacks.

var slideMonthCallback = function(evt, value) {
                                    month = value;
                                    
                                    d3.select("#handle-one")
                                       .html(monthFormatter(Math.round(value)));
                                    
                                    if(!sliding) {
                                      sliding = true;
                                      interval = setInterval(function () {
                                                              changeMonth(month);
                                                              clearInterval(interval);
                                                              sliding = false;
                                                             }, 500);
                                    } 
                                  };

var slideendMonthCallback = function(evt, value) {
                                      sliding = false;
                                      clearInterval(interval);
                                      changeMonth(month);
                                     };


var sliderTime = d3.slider().min(0).max(12).step(1)
                     .on("slide", slideMonthCallback)
                     .on("slideend", slideendMonthCallback);

function getSliders() {

  // Month.
  d3.select('#slider').call(sliderTime);

  // Init Slider text.
  d3.select("#handle-one").text('ALL');
}


// Change Month
function changeMonth(month) {

  map.getSource("yacht-lines-dimmed").setData(gpsDataLine[month]);
  map.getSource("yacht-lines-highlighted").setData(gpsDataLine[month]);

};


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

  // Add sliders
  getSliders();


  // Add zipcodes-dimmed.
  map.addLayer({
    "id": "yacht-lines-dimmed",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": gpsDataLine[0]},
    "paint": {"line-width" : 2,
              "line-color": ['get', 'color'],
              "line-opacity": 0.3},
  });

  map.addLayer({
    "id": "yacht-lines-highlighted",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": gpsDataLine[0]},
    "filter" : ["in", "group", ""],
    "paint": {"line-width" : 2,
              "line-color": ['get', 'color'],
              "line-opacity": 0.85},
  });


  // Callback for filtering routes.
    // Visualization District filters.
  cbn.on("change", function() { 
    
    // Release "clicked" condition.
    if (route_clicked) {
      map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
      resetInfo();
      route_clicked = false;
    }

    // Init a set of all districts.
    var filter = new Set(["ATTESSA IV", "DILBAR", "ECLIPSE", "HIGHLANDER", "LADY S", "LIMITLESS", "LIONHEART", "MAIN", "MUSASHI", "NAHLIN", "OCTOPUS", "RISING SUN", "SAILING YACHT A", "SEVEN SEAS", "SKAT", "SYMPHONY", "VAVA II", "VENUS"]);

    // Add and remove callbacks.
    (cb1.property("checked")) ? filter.add("ATTESSA IV") : filter.delete("ATTESSA IV");
    (cb2.property("checked")) ? filter.add("DILBAR") : filter.delete("DILBAR");
    (cb3.property("checked")) ? filter.add("ECLIPSE") : filter.delete("ECLIPSE");
    (cb4.property("checked")) ? filter.add("HIGHLANDER") : filter.delete("HIGHLANDER");
    (cb5.property("checked")) ? filter.add("LADY S") : filter.delete("LADY S");
    (cb6.property("checked")) ? filter.add("LIMITLESS") : filter.delete("LIMITLESS");
    (cb7.property("checked")) ? filter.add("LIONHEART") : filter.delete("LIONHEART");
    (cb8.property("checked")) ? filter.add("MAIN") : filter.delete("MAIN");
    (cb9.property("checked")) ? filter.add("MUSASHI") : filter.delete("MUSASHI");
    (cb10.property("checked")) ? filter.add("NAHLIN") : filter.delete("NAHLIN");
    (cb11.property("checked")) ? filter.add("OCTOPUS") : filter.delete("OCTOPUS");
    (cb12.property("checked")) ? filter.add("RISING SUN") : filter.delete("RISING SUN");
    (cb13.property("checked")) ? filter.add("SAILING YACHT A") : filter.delete("SAILING YACHT A");
    (cb14.property("checked")) ? filter.add("SEVEN SEAS") : filter.delete("SEVEN SEAS");
    (cb15.property("checked")) ? filter.add("SKAT") : filter.delete("SKAT");
    (cb16.property("checked")) ? filter.add("SYMPHONY") : filter.delete("SYMPHONY");
    (cb17.property("checked")) ? filter.add("VAVA II") : filter.delete("VAVA II");
    (cb18.property("checked")) ? filter.add("VENUS") : filter.delete("VENUS");

    // Set the filter based on the set.
    map.setFilter('yacht-lines-dimmed', ['in', 'group'].concat(Array.from(filter)));
    //map.setFilter('yacht-lines-highlighted', ['in', 'group'].concat(Array.from(filter)));

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


  // Callback for freeze/unfreeze routes.
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

