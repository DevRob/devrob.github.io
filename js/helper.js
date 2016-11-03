
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="blue-text">%contact%</span><span class="lightblue-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="blue-text">mobile</span><span class="lightblue-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="blue-text">email</span><span class="lightblue-text">%data%</span></span>';
var HTMLtwitter = '<li class="flex-item"><span class="blue-text">twitter</span><span class="lightblue-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="blue-text">github</span><span class="lightblue-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="blue-text">blog</span><span class="lightblue-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="blue-text">location</span><span class="lightblue-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<div class="welcome-message">%data%</div>';

var HTMLskillsStart = '<h3 id="skillsH3">I&apos;m good with these:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span>%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" target="_blank">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div><br><br>';
var HTMLprojectTitle = '<a href="#" target="_blank">%data%</a>';
var HTMLprojectSourceCodeLink = '<a style="float: right" href="#" target="_blank">source code >></a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="project-img">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
var HTMLschoolMinor = '<em><br>Minor: %data%</em>';

var HTMLonlineEnd = '<div>';
var HTMLonlineClasses = '<h3 class="onlineCourse">Online Classes</h3>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineSchoolLogo = '<img src="%data%" class="logo">';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineDescription = '<br><p>%data%</p>';

var HTMLh3Start = '<div class="h3-container">';
var googleMap = '<div id="map"></div>';
var earliestButton = '<button id="sort-button">%data%</button>';


$(document).ready(function() {
  $('#sort-button').click(function() {
    var rep = swap($('#sort-button').html());
    $('#sort-button').html(rep);
    $("#workExperience-row").siblings().remove();
    work.display();
  });
});

var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true,
    minZoom: 2
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {
    var locations = [];
    locations.push(bio.contacts.location);

    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  function createMapMarker(placeData) {
    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);

    for (var place in locations) {
      var request = {
        query: locations[place]
      };
      service.textSearch(request, callback);
    }
  }

  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();
  pinPoster(locations);
}

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
map.fitBounds(mapBounds);
});
