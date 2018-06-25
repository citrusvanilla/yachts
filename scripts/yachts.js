// MB Public Token
mapboxgl.accessToken = "pk.eyJ1IjoiY2l0cnVzdmFuaWxsYSIsImEiOiJjamE3b2tueXFhd25lMndwYTB2aGV6eGZ2In0.tv8tWP5uRintGND3jX49aA";

// Map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/citrusvanilla/cjg4nb4bw0rvm2soz2engacpi",
  maxZoom: 9,
  minZoom: 0,
  center: [0.0, 20.0]
});

var bbox = [[-88, 65], [-167, 46]];
map.fitBounds(bbox, {  padding: {top: 10, bottom:10, left: 10, right: 0}});

// ANIMATION VARS
// Create a GeoJSON source with an empty lineString.
var line_animation_geojson = {
    "type": "FeatureCollection",
    "features": [
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "LineString",
         "coordinates": []
       }
      }
    ]
};
var point_animation_geojson = {
    "type": "FeatureCollection",
    "features": [
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      },
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": []
       }
      }
    ]
};
var speedFactor = 3; // number of frames per longitude degree
var animation; // to store and cancel the animation
var startTime = 0;
var progress = 0; // progress = timestamp - startTime
var resetTime = false; // indicator of whether time reset is needed for the animation
var pauseButton = document.getElementById('pause');

// Filter vars.
var boatNames = ["ATTESSA IV", "DILBAR", "ECLIPSE", "HIGHLANDER", "LADY S", "LIMITLESS", "LIONHEART", "MAIN", "MUSASHI", "NAHLIN", "OCTOPUS", "RISING SUN", "SAILING YACHT A", "SEVEN SEAS", "SKAT", "SYMPHONY", "VAVA II", "VENUS"];
var filter = new Set(["ATTESSA IV", "DILBAR", "ECLIPSE", "HIGHLANDER", "LADY S", "LIMITLESS", "LIONHEART", "MAIN", "MUSASHI", "NAHLIN", "OCTOPUS", "RISING SUN", "SAILING YACHT A", "SEVEN SEAS", "SKAT", "SYMPHONY", "VAVA II", "VENUS"]);
var month = 0;

// Routes Data
var gpsDataLineFile = "data/routes_by_month.json";
var gpsDataLine;

// Points Data
var gpsDataPtsFile = "data/final_pts.geojson";
var gpsDataPts;

// Territories Data
var territoriesDataFillFile = "data/territories_s1.geojson";
var territoriesDataFill;
d3.json(territoriesDataFillFile, function(collection) {territoriesDataFill = collection;});

// Colors
var images = {"ATTESSA IV": "attessa_iv.jpg",
              "DILBAR": "dilbar.jpg",
              "ECLIPSE": "eclipse.jpg",
              "HIGHLANDER": "highlander.jpg",
              "LADY S": "lady_s.jpg",
              "LIMITLESS": "limitless.jpg",
              "LIONHEART": "lionheart.jpg",
              "MAIN": "main.jpg",
              "MUSASHI": "musashi.jpg",
              "NAHLIN": "nahlin.jpg",
              "OCTOPUS": "octopus.jpg",
              "RISING SUN": "rising_sun.jpg",
              "SAILING YACHT A": "sailing_yacht_a.jpg",
              "SEVEN SEAS": "seven_seas.jpg",
              "SKAT": "skat.jpg",
              "SYMPHONY": "symphony.jpg",
              "VAVA II": "vava_ii.jpg",
              "VENUS": "venus.jpg"};

// Image Paths
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

// Route Data
var yachtDataFile = "data/yacht_info.json";
var yachtData;
d3.json(yachtDataFile, function(collection) {yachtData = collection;});

// Load routes and add colors.
d3.json(gpsDataLineFile, function(collection) {
  gpsDataLine = collection;
  for (var i = 0; i < gpsDataLine.length; i++) {
    for (var j = 0; j < gpsDataLine[i]['features'].length; j++) {
      gpsDataLine[i]['features'][j]['properties']['color'] = colors[gpsDataLine[i]['features'][j]['properties']['group']];
    }
  }
});

// Load points and add colors.
d3.json(gpsDataPtsFile, function(collection) {
  gpsDataPts = collection;
  for (var i = 0; i < gpsDataPts.features.length; i++) {
    gpsDataPts.features[i].properties['color'] = colors[gpsDataPts.features[i].properties['VESSEL NAM']];
  }
});

// Map interaction vars
var boat = "none";
var currentLayer = "zipcodes";
var route_clicked = false;
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

// Sidebar vars
var cb0 = d3.select("#y0cb");
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
var yachtImage = d3.select("#yacht_image");

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
};

// Change Month
function changeMonth(month) {

  // Update the lines.
  map.getSource("yacht-lines-dimmed").setData(gpsDataLine[month]);
  map.getSource("yacht-lines-highlighted").setData(gpsDataLine[month]);

  // Update the points.
  if (month > 0) {
    if (route_clicked) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM'].concat(Array.from(filter))] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'MONTH', '']);
    }
    map.setFilter('yacht-points-dimmed', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM'].concat(Array.from(filter))] );
  } else {
    map.setFilter('yacht-points-highlighted', ['in', 'MONTH', '']);
    if (route_clicked) {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM'].concat(Array.from(filter)) );
    }
    map.setFilter('yacht-points-dimmed', null);
    map.setFilter('yacht-points-dimmed', ['in', 'VESSEL NAM'].concat(Array.from(filter)) );
  };

  // Update the heatmap.
  if (month > 0) {
    map.setFilter('destinations-heat', ['all', ["==", "IS_DUPLICATE", 0], ['==', 'territorial_waters' , 1], ['==', 'MONTH', month]]);
  } else {
    map.setFilter('destinations-heat', ['all', ["==", "IS_DUPLICATE", 0], ['==', 'territorial_waters' , 1]]);
  };
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
  if (feature.properties.group) {

    // Turn on the info content.
    d3.select("#info-content").style("display", "block");

    // Turn off the intro content.
    d3.select("#info-intro").style("display", "none");

    // Turn off the mode buttons.
    d3.select("#info-buttons").style("display", "none");

    // Get the yacht name.
    var boatName = feature.properties.group;

    // Change Info Header.
    d3.select("#info-header").text(boatName);

    // Change Yacht Image.
    yachtImage.attr("src", "assets/yacht_images/" + images[boatName])
    //yachtImage.style("display", "block");

    // Change Stats
    d3.select("#info-owner-value").text(yachtData[boatName]['owner']);
    d3.select("#info-port-value").text(yachtData[boatName]['home_port']);
    d3.select("#info-flag-value").text(yachtData[boatName]['flag']);
    d3.select("#info-birthdate-value").text(yachtData[boatName]['date_birthed']);
    d3.select("#info-cost-value").text(yachtData[boatName]['cost']);
    d3.select("#info-length-value").text(yachtData[boatName]['length']);
    d3.select("#info-topdestinations1-value").text(yachtData[boatName]['top1']);
    d3.select("#info-topdestinations2-value").text(yachtData[boatName]['top2']);
    d3.select("#info-topdestinations3-value").text(yachtData[boatName]['top3']);


    d3.select("#info-daysatsea-value").text(yachtData[boatName]['days_at_sea']);
    d3.select("#info-disttraveled-value").text(yachtData[boatName]['distance_travelled']['all']);
    d3.select("#info-territoriesvisited-value").text(yachtData[boatName]['territories_visited']);
    d3.select("#info-offtrack-value").text(yachtData[boatName]['off_the_beaten_track']);


  } else {
    
    
    // Change Info Header.
    d3.select("#info-header").text("");

    // Hide Image.
    //yachtImage.style("display", "none");

  }
};

// Update the Info panel with territory info.
function updateTerritory(feature) {

  // Turn on the info content panel.
  d3.select("#info-content").style("display", "block");

  // Turn on info-territory content.
  d3.select("#info-territory").style("display", "block");

  // Turn off the intro content.
  d3.select("#info-intro").style("display", "none");

  // Turn off the mode buttons.
  d3.select("#info-buttons").style("display", "none");

  // Get the territory name.
  var territory = feature.properties['NAME'];

  // Change Info Header.
  d3.select("#info-header").text(territory);
};

function resetInfo() {

  // Change Info Header.
  d3.select("#info-header").text("The Journies of the World's Most-Expensive Yachts, 2017");

  // Hide any yacht content.
  d3.select("#info-content").style("display", "none");

  // Show intro info.
  d3.select("#info-intro").style("display", "block");

  // Show Buttons.
  d3.select("#info-buttons").style("display", "block");
};

var counter = 0;
var timer = 0;

// animated in a circle as a sine wave along the map.
function animateLine(timestamp) {
    if (resetTime) {
        // resume previous progress
        startTime = performance.now() - progress;
        resetTime = false;
    } else {
        progress = timestamp - startTime;
    }

    // restart if it finishes a loop
    if (counter > 364) {
        startTime = timestamp;
        
        for (var key in line_animation_geojson.features) {
          line_animation_geojson.features[key].geometry.coordinates = [];
          point_animation_geojson.features[key].geometry.coordinates = [];
        }

        counter = 0;
    } else if (timer % speedFactor == 0) {
        //var x = progress / speedFactor;
        // draw a sine wave with some math.
        //var y = Math.sin(x * Math.PI / 90) * 40;


        for (var key in line_animation_geojson.features) {

          var x = gpsDataLine[0]['features'][key]['geometry']['coordinates'][counter][0];
          var y = gpsDataLine[0]['features'][key]['geometry']['coordinates'][counter][1];
          
          line_animation_geojson.features[key].geometry.coordinates.push([x, y]);
          point_animation_geojson.features[key].geometry.coordinates = [x,y];
          line_animation_geojson.features[key].properties.color = colors[boatNames[key]];
          point_animation_geojson.features[key].properties.color = colors[boatNames[key]];

        }



        

        // append new coordinates to the lineString
        
        // then update the map
        map.getSource('line-animation').setData(line_animation_geojson);
        map.getSource('point-animation').setData(point_animation_geojson);
        counter = counter + 1;
        timer = timer + 1;
    } else {
      timer = timer + 1;
    }

    //console.log(counter);
    //console.log(timer);
    //console.log(progress);


    // Request the next frame of the animation.
    animation = requestAnimationFrame(animateLine);
};

// Define map behavior and callback functions.
map.on("load", function(e) {


  // Add sliders
  getSliders();

  map.fitBounds([[-167, -46], [88, 65]]);


  // ANIMATION
  // add the line which will be modified in the animation
  map.addLayer({
      'id': 'line-animation',
      'type': 'line',
      'source': {
          'type': 'geojson',
          'data': line_animation_geojson
      },
      'layout': {
          'line-cap': 'round',
          'line-join': 'round'
      },
      'paint': {
          'line-color': "#FF2800",
          'line-width': 6,
          'line-opacity': 0.5
      }
  });

  // add the points which will be modified in the animation
  map.addLayer({
      'id': 'point-animation',
      'type': 'circle',
      'source': {
          'type': 'geojson',
          'data': point_animation_geojson
      },
      'paint': {
          "circle-radius": 10,
          "circle-color": "#FFF",
          "circle-opacity": 0.8
      }
  });

  startTime = performance.now();

  //animateLine();

  // click the button to pause or play
  pauseButton.addEventListener('click', function() {
      
    // Hide Sidebar and controls.
    d3.select("#sidebar").style("display", "none");
    d3.select("#controls").style("display", "none");

    // Hide Routes and heatmap.
    map.setLayoutProperty("point-animation", 'visibility', 'visible');
    map.setLayoutProperty("line-animation", 'visibility', 'visible');
    map.setLayoutProperty("yacht-lines-dimmed", 'visibility', 'none');
    map.setLayoutProperty("yacht-lines-highlighted", 'visibility', 'none');
    map.setLayoutProperty("yacht-points-dimmed", 'visibility', 'none');
    map.setLayoutProperty("yacht-points-highlighted", 'visibility', 'none');
    map.setLayoutProperty("destinations-heat", 'visibility', 'none');

    // Toggle Pause button state.
    pauseButton.classList.toggle('pause');
    if (pauseButton.classList.contains('pause')) {
      cancelAnimationFrame(animation);
    } else {
      resetTime = true;
      animateLine();
    }
  });

  // reset startTime and progress once the tab loses or gains focus
  // requestAnimationFrame also pauses on hidden tabs by default
  document.addEventListener('visibilitychange', function() {
      resetTime = true;
  });

  // Routes Dimmed.
  map.addLayer({
    "id": "yacht-lines-dimmed",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": gpsDataLine[0]},
    "paint": {"line-width" : 2.5,
              "line-color": ['get', 'color'],
              "line-opacity": 0.4},
  });

  // Routes Highlighted.
  map.addLayer({
    "id": "yacht-lines-highlighted",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": gpsDataLine[0]},
    "filter" : ["in", "group", ""],
    "paint": {"line-width" : 2.5,
              "line-color": ['get', 'color'],
              "line-opacity": 0.85},
  });

  // Points Dimmed.
  map.addLayer({
    "id": "yacht-points-dimmed",
    "type": "circle",
    "source": {
      "type": "geojson",
      "data": gpsDataPts
    },
    "filter" : ["==", "IS_DUPLICATE", 0],
    'paint': {
          'circle-radius': {
                'base': 3,
                'stops': [[1, 3], [9, 30]]
            },
          "circle-color": ['get', 'color'],
          "circle-opacity": 0.3
      },
  });

  // Points Highlighted.
  map.addLayer({
    "id": "yacht-points-highlighted",
    "type": "circle",
    "source": {
      "type": "geojson",
      "data": gpsDataPts
    },
    "filter" : ["in", "VESSEL NAM", ""],
    'paint': {
          'circle-radius': {
                'base': 3,
                'stops': [[1, 3], [9, 30]]
            },
          "circle-color": ['get', 'color'],
          "circle-opacity": 0.9
      },
  });

  // Heatmap Destinations.
  map.addLayer({
        "id": "destinations-heat",
        "type": "heatmap",
        "source": {
          "type": "geojson",
          "data": gpsDataPts
        },
        "filter" : ['all', ["==", "IS_DUPLICATE", 0], ['==', 'territorial_waters' , 1]],
        "maxzoom": 9,
        "visibility": "none",
        "paint": {
            // Increase the heatmap weight based on frequency and property magnitude
            "heatmap-weight": [
                "interpolate",
                ["linear"],
                ["get", "mag"],
                0, 0,
                6, 1
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            "heatmap-intensity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 1,
                9, 3
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            "heatmap-color": [
                "interpolate",
                ["linear"],
                ["heatmap-density"],
                0, "rgba(33,102,172,0)",
                0.2, "rgb(103,169,207)",
                0.4, "rgb(209,229,240)",
                0.6, "rgb(253,219,199)",
                0.8, "rgb(239,138,98)",
                1, "rgb(178,24,43)"
            ],
            // Adjust the heatmap radius by zoom level
            "heatmap-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 8,
                9, 25
            ],
            // Transition from heatmap to circle layer by zoom level
            "heatmap-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                7, 0.8,
                9, 0
            ],
        }
    }
  );
  map.setLayoutProperty("destinations-heat", 'visibility', 'none');

  // Destinations Hover Layer.
  map.addLayer({"id": "territories",
                "type": "fill",
                "source": {
                  "type": "geojson",
                  "data": territoriesDataFill
                },
                "paint": {
                  "fill-color": "#333333",
                  "fill-opacity": 0.00,
                }
  });
  map.setLayoutProperty("territories", 'visibility', 'none');

  // Collapsible Click callback.
  d3.select("#legend-collapsible").on("click", function () {
    this.classList.toggle("active");
    if (d3.select("#legend-content").style("display") === "block") {
      d3.select("#legend-content").style("display", "none");
    } else {
      d3.select("#legend-content").style("display", "block");
    };
  });

  // Destinations mode callback.
  d3.select("#destination-button").on("click", function () {

    d3.select("#controls").style("display", "block");

    if (!pauseButton.classList.contains('pause')) {
          cancelAnimationFrame(animation);
          pauseButton.classList.toggle('pause');
    };

    map.setLayoutProperty("point-animation", 'visibility', 'none');
    map.setLayoutProperty("line-animation", 'visibility', 'none');

    if (map.getLayoutProperty("yacht-points-highlighted", 'visibility') === "visible")
      map.setLayoutProperty("yacht-points-highlighted", 'visibility', 'none');

    if (map.getLayoutProperty("yacht-points-dimmed", 'visibility') === "visible")
      map.setLayoutProperty("yacht-points-dimmed", 'visibility', 'none');

    if (map.getLayoutProperty("yacht-lines-highlighted", 'visibility') === "visible")
      map.setLayoutProperty("yacht-lines-highlighted", 'visibility', 'none');

    if (map.getLayoutProperty("yacht-lines-dimmed", 'visibility') === "visible")
      map.setLayoutProperty("yacht-lines-dimmed", 'visibility', 'none');

    if (map.getLayoutProperty("destinations-heat", 'visibility') === "none")
      map.setLayoutProperty("destinations-heat", 'visibility', 'visible');

    if (map.getLayoutProperty("territories", 'visibility') === "none")
      map.setLayoutProperty("territories", 'visibility', 'visible');

    if (d3.select("#sidebar").style("display") === "block")
      d3.select("#sidebar").style("display", "none");

    if (d3.select("#info-territory").style("display") === "none")
      d3.select("#info-territory").style("display", "block");

    if (d3.select("#info-boat").style("display") === "block")
      d3.select("#info-boat").style("display", "none");
  });

  // Routes mode callback.
  d3.select("#route-button").on("click", function () {


    d3.select("#controls").style("display", "block");

    if (!pauseButton.classList.contains('pause')) {
          cancelAnimationFrame(animation);
          pauseButton.classList.toggle('pause');
    };

    map.setLayoutProperty("point-animation", 'visibility', 'none');
    map.setLayoutProperty("line-animation", 'visibility', 'none');

    if (map.getLayoutProperty("yacht-points-highlighted", 'visibility') === "none")
      map.setLayoutProperty("yacht-points-highlighted", 'visibility', 'visible');

    if (map.getLayoutProperty("yacht-points-dimmed", 'visibility') === "none")
      map.setLayoutProperty("yacht-points-dimmed", 'visibility', 'visible');

    if (map.getLayoutProperty("yacht-lines-highlighted", 'visibility') === "none")
      map.setLayoutProperty("yacht-lines-highlighted", 'visibility', 'visible');

    if (map.getLayoutProperty("yacht-lines-dimmed", 'visibility') === "none")
      map.setLayoutProperty("yacht-lines-dimmed", 'visibility', 'visible');

    if (map.getLayoutProperty("destinations-heat", 'visibility') === "visible")
      map.setLayoutProperty("destinations-heat", 'visibility', 'none');

    if (map.getLayoutProperty("territories", 'visibility') === "visible")
      map.setLayoutProperty("territories", 'visibility', 'none');

    if (d3.select("#sidebar").style("display") === "none")
      d3.select("#sidebar").style("display", "block");

    if (d3.select("#info-territory").style("display") === "block")
      d3.select("#info-territory").style("display", "none");

    if (d3.select("#info-boat").style("display") === "none")
      d3.select("#info-boat").style("display", "block");
  });

  // Callback for filtering all routes.
  cb0.on("change", function() { 
    
    // Release "clicked" condition.
    if (route_clicked) {
      map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);

      if (month > 0) {
        map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM'].concat(Array.from(filter))] );
      } else {
        map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM'].concat(Array.from(filter)) );
      }
      
      resetInfo();
      route_clicked = false;
    }

    // Add and remove callbacks.
    if (cb0.property("checked")) {
      console.log("checked");
      for (var i = 0; i < boatNames.length; i++) {
        filter.add(boatNames[i]);
        cb1.property("checked", true);
        cb2.property("checked", true);
        cb3.property("checked", true);
        cb4.property("checked", true);
        cb5.property("checked", true);
        cb6.property("checked", true);
        cb7.property("checked", true);
        cb8.property("checked", true);
        cb9.property("checked", true);
        cb10.property("checked", true);
        cb11.property("checked", true);
        cb12.property("checked", true);
        cb13.property("checked", true);
        cb14.property("checked", true);
        cb15.property("checked", true);
        cb16.property("checked", true);
        cb17.property("checked", true);
        cb18.property("checked", true);
      }
    } else {
      console.log("unchecked");
      for (var i = 0; i < boatNames.length; i++) {
        filter.delete(boatNames[i]);
        cb1.property("checked", false);
        cb2.property("checked", false);
        cb3.property("checked", false);
        cb4.property("checked", false);
        cb5.property("checked", false);
        cb6.property("checked", false);
        cb7.property("checked", false);
        cb8.property("checked", false);
        cb9.property("checked", false);
        cb10.property("checked", false);
        cb11.property("checked", false);
        cb12.property("checked", false);
        cb13.property("checked", false);
        cb14.property("checked", false);
        cb15.property("checked", false);
        cb16.property("checked", false);
        cb17.property("checked", false);
        cb18.property("checked", false);
      };
    };

    // Set the filter based on the set.
    map.setFilter('yacht-lines-dimmed', ['in', 'group'].concat(Array.from(filter)));
    if (month > 0) {
        map.setFilter('yacht-points-dimmed', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM'].concat(Array.from(filter))] );
      } else {
        map.setFilter('yacht-points-dimmed', ['in', 'VESSEL NAM'].concat(Array.from(filter)) );
      }
  });

  // Callback for filtering individual routes.
  cbn.on("change", function() { 
    
    // Release "clicked" condition.
    if (route_clicked) {
      map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);

      if (month > 0) {
        map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM'].concat(Array.from(filter))] );
      } else {
        map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM'].concat(Array.from(filter)) );
      }
      
      resetInfo();
      route_clicked = false;
    }

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


    if (!cb1.property("checked") || 
        !cb2.property("checked") ||
        !cb3.property("checked") ||
        !cb4.property("checked") ||
        !cb5.property("checked") ||
        !cb6.property("checked") ||
        !cb7.property("checked") ||
        !cb8.property("checked") ||
        !cb9.property("checked") ||
        !cb10.property("checked") ||
        !cb11.property("checked") ||
        !cb12.property("checked") ||
        !cb13.property("checked") ||
        !cb14.property("checked") ||
        !cb15.property("checked") ||
        !cb16.property("checked") ||
        !cb17.property("checked") ||
        !cb18.property("checked")) {
      cb0.property("checked", false);
    };

    if (cb1.property("checked") && 
        cb2.property("checked") &&
        cb3.property("checked") &&
        cb4.property("checked") &&
        cb5.property("checked") &&
        cb6.property("checked") &&
        cb7.property("checked") &&
        cb8.property("checked") &&
        cb9.property("checked") &&
        cb10.property("checked") &&
        cb11.property("checked") &&
        cb12.property("checked") &&
        cb13.property("checked") &&
        cb14.property("checked") &&
        cb15.property("checked") &&
        cb16.property("checked") &&
        cb17.property("checked") &&
        cb18.property("checked")) {
      cb0.property("checked", true);
    };

    // Set the filter based on the set.
    map.setFilter('yacht-lines-dimmed', ['in', 'group'].concat(Array.from(filter)));
    if (month > 0) {
        map.setFilter('yacht-points-dimmed', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM'].concat(Array.from(filter))] );
      } else {
        map.setFilter('yacht-points-dimmed', ['in', 'VESSEL NAM'].concat(Array.from(filter)) );
      }    
  });

  // Mouse-move interatction for lines.
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
      
      if (month > 0) {
        map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', boat]] );
      } else {
        map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', boat] );
      }


      // Update the info panel.
      updateInfo(feature);
      }
    }
  );

  // Mouse-move interaction for territories.
  map.on('mousemove', 'territories', function(e) {
    
    // Interactive Cursor.
    map.getCanvas().style.cursor = 'pointer';

    // Get first feature.
    var feature = e.features[0];

    // Update the info panel.
    updateTerritory(feature);
    
  });


  // Mouse-leave interaction for territories.
  map.on('mouseleave', 'territories', function(e) {
    
    // Change the cursor style again.
    map.getCanvas().style.cursor = '';

    // Update info panel with Manhattan data.
    resetInfo();

  });


  map.on('mouseleave', 'yacht-lines-dimmed', function(e) {

    // Change the cursor style again.
    map.getCanvas().style.cursor = '';

    if (!route_clicked) {

      // Clear Filters.
      map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
      map.setFilter('yacht-lines-dimmed', ['in', 'group'].concat(Array.from(filter)));


      if (month > 0) {
        map.setFilter('yacht-points-dimmed', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM'].concat(Array.from(filter))] );
      } else {
        map.setFilter('yacht-points-dimmed', ['in', 'VESSEL NAM'].concat(Array.from(filter)));
      }

      


    // Update info panel with Manhattan data.
    resetInfo();

    }
  });

  // Mouse-move interaction for GPS points.
  map.on('mouseenter', 'yacht-points-dimmed', function(e) {
      
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';

      var boat = date = e.features[0].properties['VESSEL NAM'];
      var coordinates = e.features[0].geometry.coordinates.slice();
      if (e.features[0].properties['territorial_waters'] === 1) {
        var territory = e.features[0].properties['Territory1'];
      } else {
        var territory = "International";
      }
      var date = e.features[0].properties['DATE'];
      var numDays = e.features[0].properties['DAYS_AT_LOCATION'];
      

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup.setLngLat(coordinates)
          .setHTML("<strong>Yacht:</strong>  " + boat + "<br><strong>Date:</strong>  " + date + "<br><strong>Territory:</strong>  " + territory + "<br><strong>Duration of stay:</strong>  " + numDays + " day(s)")
          .addTo(map);
  });

  map.on('mouseleave', 'yacht-points-dimmed', function() {
      map.getCanvas().style.cursor = '';
      popup.remove();
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
      
      if (month > 0) {
        map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', boat]] );
      } else {
        map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', boat]);
      }

      

      // Update panel.
      updateInfo(features[0]);

      // Zoom to features
      var coordinates = features[0].geometry.coordinates;

      var bounds = coordinates.reduce(function(bounds, coord) {
                        return bounds.extend(coord);
          }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

      map.fitBounds(bounds, {
            padding: 20
        });




    } else { // No feature found.
      
      // Clear focus, clear feature.
      route_clicked = false;
      map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);

      // Zoom to center.
      if (!route_clicked) {
        map.fitBounds([[-167, -46], [88, 65]]);
      }


      // Update info panel with Manhattan data.
      resetInfo();
    }
  });

});

// Set default map cursor to a hand.
map.getCanvas().style.cursor = "default";

