// MB Public Token
mapboxgl.accessToken = "pk.eyJ1IjoiZGFucmV2aXR0ZSIsImEiOiJjamRxNHZtcmowMG8xMzRwa2NlbnB0eG1oIn0.JPstGIPtHL9R4NjMDbF2iw";

// Map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/danrevitte/cjiw46va79a5k2so2mn5adkfq",
  maxZoom: 8,
  minZoom: 0,
  center: [0.0, 20.0]
});

// Media Responsivity
// Media - Narrow Desktop
var media;
var isNarrowDesktop = window.matchMedia("(max-width: 780px) and (min-width: 650px)");

function changeMediaNarrowDesktop(x) {
  if (x.matches) {
    
    // Collapse Filter
    document.getElementById('legend-collapsible').classList.remove('active');
    d3.select("#legend-content").style("display", "none");

    // Collapse Info
    document.getElementById('info-collapsible').classList.remove('active');
    d3.select("#info").style("display", "none");
  };
};

changeMediaNarrowDesktop(isNarrowDesktop); // Call listener function at run time
isNarrowDesktop.addListener(changeMediaNarrowDesktop); // Attach listener function on state changes

// Media - Mobile
var isNarrowMobile = window.matchMedia("(max-width: 650px)");

function changeMediaNarrowMobile(x) {
  if (x.matches) {
    document.getElementById('modes').appendChild(document.getElementById('route-button'));
    document.getElementById('modes').appendChild(document.getElementById('destination-button'));
    document.getElementById('modes').appendChild(document.getElementById('pause'));

    d3.select("#info").style("display", "block");
  };

  if (!x.matches) {
    document.getElementById('info-buttons').appendChild(document.getElementById('route-button'));
    document.getElementById('info-buttons').appendChild(document.getElementById('destination-button'));
    document.getElementById('info-buttons').appendChild(document.getElementById('pause'));


  };
};

changeMediaNarrowMobile(isNarrowMobile); // Call listener function at run time
isNarrowMobile.addListener(changeMediaNarrowMobile); // Attach listener function on state changes


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
      }
    ]
};

var heat_animation_geojson = {
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
      }]};


var speedFactor = 3; // number of frames
var animation; // to store and cancel the animation
var startTime = 0;
var progress = 0; // progress = timestamp - startTime
var resetTime = false; // indicator of whether time reset is needed for the animation
var pauseButton = document.getElementById('pause');
var counter = 0;
var timer = 0;

// Filter vars.
var boatNames = ["ATTESSA IV",
                 "DILBAR",
                 "ECLIPSE",
                 "LADY S",
                 "LIMITLESS",
                 "LIONHEART",
                 "MAIN",
                 "MUSASHI",
                 "NAHLIN",
                 "OCTOPUS",
                 "RISING SUN",
                 "SAILING YACHT A",
                 "SEVEN SEAS",
                 "SKAT",
                 "SYMPHONY",
                 "VAVA II",
                 "VENUS"];
var filter = new Set(boatNames);
var month = 0;

// Routes Data
var gpsDataLineFile = "data/routes_by_month3.json";
var gpsDataLine;

// Points Data
var gpsDataPtsFile = "data/final_pts2.geojson";
var gpsDataPts;

// Territories Data
var territoriesDataFillFile = "data/territories_s1.geojson";
var territoriesDataFill;
d3.json(territoriesDataFillFile, function(collection) {territoriesDataFill = collection;});

// Images
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

// Colors
var colors = {"ATTESSA IV": "#ff6666", // redish
              "DILBAR": "#551A8B",
              "ECLIPSE": "#008B00",
              "LADY S": "#FF7F00",
              "LIMITLESS": "#FFD700",
              "LIONHEART": "#808080",  // Grey
              "MAIN": "#FB9A99",
              "MUSASHI": "#90ee90",
              "NAHLIN": "#CAB2D6",
              "OCTOPUS": "#FDBF6F", // light orange
              "RISING SUN": "#eee685",
              "SAILING YACHT A": "#722f37",
              "SEVEN SEAS": "#e066ff",
              "SKAT": "#FF1493",
              "SYMPHONY": "#00FF00",  // green1
              "VAVA II": "#8B4500",  // dark orange 4
              "VENUS": "#00ced1"};

// Yacht Data
var yachtDataFile = "data/yacht_info.json";
var yachtData;
d3.json(yachtDataFile, function(collection) {yachtData = collection;});

// Destinations Data
var destinationDataFile = "data/destination_info.json";
var destinationData;
d3.json(destinationDataFile, function(collection) {destinationData = collection;});

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
//var cb4 = d3.select("#y4cb");
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

// Update the Info panel.
function updateInfo(boat) {

  // Determine if provider or neighborhood.
  if (boat) {

    // Turn on the info content.
    d3.select("#info-content").style("display", "block");

    // Turn off the intro content.
    d3.select("#info-intro").style("display", "none");
    d3.select("#info-intro-mobile").style("display", "none");

    // Get the yacht name.
    var boatName = boat;

    // Change Info Header.
    d3.select("#info-header").text(boatName);

    // Change Yacht Image.
    yachtImage.attr("src", yachtData[boatName]['image_file']);
    //yachtImage.style("display", "block");

    // Change Stats
    d3.select("#info-owner-value").text(yachtData[boatName]['owner']);
    d3.select("#info-port-value").text(yachtData[boatName]['home_port']);
    d3.select("#info-flag-value").text(yachtData[boatName]['flag']);
    d3.select("#info-birthdate-value").text(yachtData[boatName]['date_birthed']);
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
  d3.select("#info-intro-mobile").style("display", "none");

  // Get the territory name.
  var territory = feature.properties['NAME'];

  // Change Info Header.
  d3.select("#info-header").text(territory);

  // Change Stats.
  d3.select("#info-popularity-value").text("#" + destinationData[territory]['rank_num'] + " of 63");
  d3.select("#info-totaldays-value").text(destinationData[territory]['total_days']);
  d3.select("#info-boatcount-value").text(destinationData[territory]['boats'] + " out of 17");
  d3.select("#info-lengthofstay-value").text(destinationData[territory]['days_per_boat']);
  d3.select("#info-janvisits-value").text(destinationData[territory]['days_per_month']['jan']);
  d3.select("#info-febvisits-value").text(destinationData[territory]['days_per_month']['feb']);
  d3.select("#info-marvisits-value").text(destinationData[territory]['days_per_month']['mar']);
  d3.select("#info-aprvisits-value").text(destinationData[territory]['days_per_month']['apr']);
  d3.select("#info-mayvisits-value").text(destinationData[territory]['days_per_month']['may']);
  d3.select("#info-junvisits-value").text(destinationData[territory]['days_per_month']['jun']);
  d3.select("#info-julvisits-value").text(destinationData[territory]['days_per_month']['jul']);
  d3.select("#info-augvisits-value").text(destinationData[territory]['days_per_month']['aug']);
  d3.select("#info-sepvisits-value").text(destinationData[territory]['days_per_month']['sep']);
  d3.select("#info-octvisits-value").text(destinationData[territory]['days_per_month']['oct']);
  d3.select("#info-novvisits-value").text(destinationData[territory]['days_per_month']['nov']);
  d3.select("#info-decvisits-value").text(destinationData[territory]['days_per_month']['dec']);
};

function resetInfo() {

  // Change Info Header.
  d3.select("#info-header").text("");

  // Hide any yacht content.
  d3.select("#info-content").style("display", "none");

  // Show intro info.
  if (isNarrowMobile.matches == false)
    d3.select("#info-intro").style("display", "block");
  else
    d3.select("#info-intro-mobile").style("display", "block");

  // Show Buttons.
  d3.select("#info-buttons").style("display", "block");
};

function drawAni(day_num) {
    filter = ["all", ["==", "IS_DUPLICATE", 0], ["==", "territorial_waters" , 1], ["<=", "order", day_num]];
    map.setFilter("destinations-heat", filter);

    for (key in line_animation_geojson.features) {
      x = gpsDataLine[0]['features'][key]['geometry']['coordinates'][day_num][0];
      y = gpsDataLine[0]['features'][key]['geometry']['coordinates'][day_num][1];
      point_animation_geojson.features[key].geometry.coordinates = [x,y];
      line_animation_geojson.features[key].geometry.coordinates.push([x, y]);
    };

    map.getSource('line-animation').setData(line_animation_geojson);
    map.getSource('point-animation').setData(point_animation_geojson);

    if (Math.floor(day_num/30) == 0) {
      d3.select("#time").text("January 2017");
    } else if (Math.floor(day_num/30) == 1) {
      d3.select("#time").text("February 2017");
    } else if (Math.floor(day_num/30) == 2) {
      d3.select("#time").text("March 2017");
    } else if (Math.floor(day_num/30) == 3) {
      d3.select("#time").text("April 2017");
    } else if (Math.floor(day_num/30) == 4) {
      d3.select("#time").text("May 2017");
    } else if (Math.floor(day_num/30) == 5) {
      d3.select("#time").text("June 2017");
    } else if (Math.floor(day_num/30) == 6) {
      d3.select("#time").text("July 2017");
    } else if (Math.floor(day_num/30) == 7) {
      d3.select("#time").text("August 2017");
    } else if (Math.floor(day_num/30) == 8) {
      d3.select("#time").text("September 2017");
    } else if (Math.floor(day_num/30) == 9) {
      d3.select("#time").text("October 2017");
    } else if (Math.floor(day_num/30) == 10) {
      d3.select("#time").text("November 2017");
    } else if (Math.floor(day_num/30) == 11) {
      d3.select("#time").text("December 2017");
    };

}




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
          heat_animation_geojson.features[0].geometry.coordinates = [];
        }

        counter = 0;
    } else if (timer % speedFactor == 0) {

        for (var key in line_animation_geojson.features) {

        
          var x = gpsDataLine[0]['features'][key]['geometry']['coordinates'][counter][0];
          var y = gpsDataLine[0]['features'][key]['geometry']['coordinates'][counter][1];

          line_animation_geojson.features[key].geometry.coordinates.push([x, y]);
          point_animation_geojson.features[key].geometry.coordinates = [x,y];
            
          
          

          /*
          heat_animation_geojson.features.push([
      {"type": "Feature",
       "properties": {
          "color": ""
       },
       "geometry": {
         "type": "Point",
         "coordinates": [x,y]
       }
      }]);*/

        };

        // append new coordinates to the lineString
        // then update the map
        if (counter % 2 == 0) {
          map.getSource('line-animation').setData(line_animation_geojson);
        };
        map.getSource('point-animation').setData(point_animation_geojson);
        //map.getSource('heat-animation').setData(heat_animation_geojson);

        counter = counter + 1;
        timer = timer + 1;
    } else {
      timer = timer + 1;
    };

    // Request the next frame of the animation.
    animation = requestAnimationFrame(animateLine);

    // Update Time.
    if (Math.floor(counter/30) == 0) {
      d3.select("#time").text("January 2017");
    } else if (Math.floor(counter/30) == 1) {
      d3.select("#time").text("February 2017");
    } else if (Math.floor(counter/30) == 2) {
      d3.select("#time").text("March 2017");
    } else if (Math.floor(counter/30) == 3) {
      d3.select("#time").text("April 2017");
    } else if (Math.floor(counter/30) == 4) {
      d3.select("#time").text("May 2017");
    } else if (Math.floor(counter/30) == 5) {
      d3.select("#time").text("June 2017");
    } else if (Math.floor(counter/30) == 6) {
      d3.select("#time").text("July 2017");
    } else if (Math.floor(counter/30) == 7) {
      d3.select("#time").text("August 2017");
    } else if (Math.floor(counter/30) == 8) {
      d3.select("#time").text("September 2017");
    } else if (Math.floor(counter/30) == 9) {
      d3.select("#time").text("October 2017");
    } else if (Math.floor(counter/30) == 10) {
      d3.select("#time").text("November 2017");
    } else if (Math.floor(counter/30) == 11) {
      d3.select("#time").text("December 2017");
    };
};

// Define map behavior and callback functions.
map.on("load", function(e) {

  // Change MapBox attribution positions.
  if (!isNarrowMobile.matches) {
    d3.select(".mapboxgl-ctrl-bottom-left").style("top", "4px");
    d3.select(".mapboxgl-ctrl-bottom-right").style("right", "auto").style("left", "50%");
  };
  
  // Add sliders
  getSliders();

  // Fit to these bounds.
  map.fitBounds([[-167, -46], [88, 65]], {padding: {top: 100, bottom:10, left: 10, right: 10}});

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
          'line-color': "#ffce42",
          'line-width': 5,
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
          "circle-opacity": 0.8,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#000",
          "circle-stroke-opacity": 0.8
      }
  });

  // add the points which will be modified in the animation
  map.addLayer({
      'id': 'heat-animation',
      'type': 'heatmap',
      'source': {
          'type': 'geojson',
          'data': heat_animation_geojson
      },
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
  });

  // click the button to pause or play
  pauseButton.addEventListener('click', function() {
      
    // Hide Sidebar, controls, and info panel.
    d3.select("#sidebar").style("display", "none");
    d3.select("#controls").style("display", "none");
    document.getElementById('info-collapsible').classList.remove('active');
    d3.select("#info").style("display", "none");

    // Show Time.
    d3.select("#time").style("display", "block");

    // Hide Routes and heatmap.
    map.setLayoutProperty("point-animation", 'visibility', 'visible');
    map.setLayoutProperty("line-animation", 'visibility', 'visible');
    map.setLayoutProperty("yacht-lines-dimmed", 'visibility', 'none');
    map.setLayoutProperty("yacht-lines-highlighted", 'visibility', 'none');
    map.setLayoutProperty("yacht-points-dimmed", 'visibility', 'none');
    map.setLayoutProperty("yacht-points-highlighted", 'visibility', 'none');
    map.setLayoutProperty("destinations-heat", 'visibility', 'none');
    map.setLayoutProperty("territories", 'visibility', 'none');

    // Toggle Pause button state.
    pauseButton.classList.toggle('pause');
    if (pauseButton.classList.contains('pause')) {
      cancelAnimationFrame(animation);
    } else {
      resetTime = true;
      animateLine();
    };

    if (isNarrowMobile.matches == true) {
      d3.select("#info").style("display", "block");
    };
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
    "paint": {"line-width" : 3,
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
                'base': 4,
                'stops': [[1, 4], [9, 40]]
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
  map.addSource("test",
                {type: "vector",
                 url: "mapbox://danrevitte.2w7nnylg"}
  );

  map.addLayer({"id": "territories",
                "type": "fill",
                "source": "test",
                "source-layer": "territories_s1-dvzg9q",
                "paint": {
                  "fill-color": "#333333",
                  "fill-opacity": 0.00,
                }
  });

  map.setLayoutProperty("territories", 'visibility', 'none');

  // Legend Collapsible Click callback.
  d3.select("#legend-collapsible").on("click", function () {
    this.classList.toggle("active");
    if (d3.select("#legend-content").style("display") === "block") {
      d3.select("#legend-content").style("display", "none");
    } else {
      d3.select("#legend-content").style("display", "block");
    };

  });

  // Info Collapsible Click callback.
  d3.select("#info-collapsible").on("click", function () {
    this.classList.toggle("active");
    if (d3.select("#info").style("display") === "block") {
      d3.select("#info").style("display", "none");
    } else {
      d3.select("#info").style("display", "block");
    };

  });

  // Destinations mode callback.
  d3.select("#destination-button").on("click", function () {

    d3.select("#controls").style("display", "block");

    // Uncollapse Info Panel.
    document.getElementById('info-collapsible').classList.add('active');
    d3.select("#info").style("display", "block");

    // Hide Time.
    d3.select("#time").style("display", "none");

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

    // Uncollapse Info Panel.
    document.getElementById('info-collapsible').classList.add('active');
    d3.select("#info").style("display", "block");

    // Hide Time.
    d3.select("#time").style("display", "none");
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

    if (d3.select("#sidebar").style("display") === "none" && isNarrowMobile.matches == false)
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
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
      resetInfo();
      route_clicked = false;
    }

    // Add and remove callbacks.
    if (cb0.property("checked")) {
      for (var i = 0; i < boatNames.length; i++) {
        filter.add(boatNames[i]);
        cb1.property("checked", true);
        cb2.property("checked", true);
        cb3.property("checked", true);
        //cb4.property("checked", true);
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
      for (var i = 0; i < boatNames.length; i++) {
        filter.delete(boatNames[i]);
        cb1.property("checked", false);
        cb2.property("checked", false);
        cb3.property("checked", false);
        //cb4.property("checked", false);
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
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
      resetInfo();
      route_clicked = false;
    }

    (cb1.property("checked")) ? filter.add("ATTESSA IV") : filter.delete("ATTESSA IV");
    (cb2.property("checked")) ? filter.add("DILBAR") : filter.delete("DILBAR");
    (cb3.property("checked")) ? filter.add("ECLIPSE") : filter.delete("ECLIPSE");
    //(cb4.property("checked")) ? filter.add("HIGHLANDER") : filter.delete("HIGHLANDER");
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
        //!cb4.property("checked") ||
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
        //cb4.property("checked") &&
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
      updateInfo(feature.properties.group);
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
      updateInfo(features[0].properties.group);

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
        map.fitBounds([[-167, -46], [88, 65]], {padding: {top: 100, bottom:10, left: 10, right: 10}});

      }


      // Update info panel with Manhattan data.
      resetInfo();
    }
  });

  // Legend Menu Filter Callbacks.
  d3.select("#select-y1").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'ATTESSA IV']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'ATTESSA IV']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'ATTESSA IV'] );
    };
    // Update the info panel.
    updateInfo('ATTESSA IV');
  });

  // Legend Menu Filter Callbacks.
  d3.select("#select-y1").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();}
  );

  // Legend Menu Filter Callbacks.
  d3.select("#select-y2").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'DILBAR']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'DILBAR']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'DILBAR'] );
    };
    // Update the info panel.
    updateInfo('DILBAR');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y2").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

  // Legend Menu Filter Callbacks.
  d3.select("#select-y3").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'ECLIPSE']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'ECLIPSE']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'ECLIPSE'] );
    };
    // Update the info panel.
    updateInfo('ECLIPSE');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y3").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y5").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'LADY S']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'LADY S']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'LADY S'] );
    };
    // Update the info panel.
    updateInfo('LADY S');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y5").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y6").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'LIMITLESS']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'LIMITLESS']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'LIMITLESS'] );
    };
    // Update the info panel.
    updateInfo('LIMITLESS');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y6").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y7").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'LIONHEART']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'LIONHEART']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'LIONHEART'] );
    };
    // Update the info panel.
    updateInfo('LIONHEART');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y7").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y8").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'MAIN']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'MAIN']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'MAIN'] );
    };
    // Update the info panel.
    updateInfo('MAIN');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y8").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y9").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'MUSASHI']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'MUSASHI']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'MUSASHI'] );
    };
    // Update the info panel.
    updateInfo('MUSASHI');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y9").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y10").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'NAHLIN']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'NAHLIN']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'NAHLIN'] );
    };
    // Update the info panel.
    updateInfo('NAHLIN');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y10").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y11").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'OCTOPUS']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'OCTOPUS']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'OCTOPUS'] );
    };
    // Update the info panel.
    updateInfo('OCTOPUS');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y11").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y12").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'RISING SUN']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'RISING SUN']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'RISING SUN'] );
    };
    // Update the info panel.
    updateInfo('RISING SUN');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y12").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y13").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'SAILING YACHT A']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'SAILING YACHT A']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'SAILING YACHT A'] );
    };
    // Update the info panel.
    updateInfo('SAILING YACHT A');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y13").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y14").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'SEVEN SEAS']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'SEVEN SEAS']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'SEVEN SEAS'] );
    };
    // Update the info panel.
    updateInfo('SEVEN SEAS');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y14").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y15").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'SKAT']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'SKAT']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'SKAT'] );
    };
    // Update the info panel.
    updateInfo('SKAT');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y15").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y16").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'SYMPHONY']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'SYMPHONY']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'SYMPHONY'] );
    };
    // Update the info panel.
    updateInfo('SYMPHONY');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y16").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y17").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'VAVA II']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'VAVA II']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'VAVA II'] );
    };
    // Update the info panel.
    updateInfo('VAVA II');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y17").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })

    // Legend Menu Filter Callbacks.
  d3.select("#select-y18").on("mouseover", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', 'VENUS']);
    if (month > 0) {
      map.setFilter('yacht-points-highlighted', ['all', ['in', 'MONTH', month], ['in', 'VESSEL NAM', 'VENUS']] );
    } else {
      map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', 'VENUS'] );
    };
    // Update the info panel.
    updateInfo('VENUS');
  });
  // Legend Menu Filter Callbacks.
  d3.select("#select-y18").on("mouseout", function() {

    // Filter map overlay for the NTA.
    map.setFilter('yacht-lines-highlighted', ['in', 'group', '']);
    map.setFilter('yacht-points-highlighted', ['in', 'VESSEL NAM', '']);
    // Update info panel with Manhattan data.
    resetInfo();
  })
});

// Set default map cursor to a hand.
map.getCanvas().style.cursor = "default";

