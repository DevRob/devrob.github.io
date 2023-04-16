let HTMLnavItem = '<li class="nav-item"><a href="%anchor%" rel="nofollow">%title%</a></li>'

let HTMLcontactGeneric = '<li class="flex-item"><span class="blue-text">%contact%</span><span class="lightblue-text">%data%</span></li>'
let HTMLmobile = '<li class="flex-item"><span class="blue-text">mobile</span><span class="lightblue-text">%data%</span></li>'
let HTMLemail = '<li class="flex-item"><span class="blue-text">email</span><span class="lightblue-text">%data%</span></span>'
let HTMLtwitter = '<li class="flex-item"><span class="blue-text">twitter</span><span class="lightblue-text">%data%</span></li>'
let HTMLgithub = '<li class="flex-item"><span class="blue-text">github</span><span class="lightblue-text">%data%</span></li>'
let HTMLblog = '<li class="flex-item"><span class="blue-text">blog</span><span class="lightblue-text">%data%</span></li>'
let HTMLlocation = '<li class="flex-item"><span class="blue-text">location</span><span class="lightblue-text">%data%</span></li>'

let HTMLbioPic = '<img src="%data%" class="biopic">'
let HTMLWelcomeMsg = '<div class="welcome-message">%data%</div>'

let HTMLskillsStart = '<h3 id="skillsH3">I&apos;m good with these:</h3><ul id="skills" class="flex-box"></ul>'
let HTMLskills = '<li class="flex-item"><span>%data%</span></li>'

let HTMLworkSectionTitle = '<h2>Work</h2>';
let HTMLworkContainer = `
  <div id="workExperience-row" class="row">
    <div id="workExperience-header" class="col-md-4">
      <h2>Work</h2>
    </div>
    <div id="workExperience-button" class="col-md-4"></div>
  </div>
`
let HTMLworkStart = '<div class="work-entry"></div>'
let HTMLworkEmployer = '<a href="#" target="_blank">%data%'
let HTMLworkTitle = ' - %data%</a>'
let HTMLworkDates = '<div class="date-text">%data%</div>'
let HTMLworkLocation = '<div class="location-text">%data%</div>'
let HTMLworkDescription = '<p>%data%</p>'

let HTMLprojectSectionTitle = '<h2>Projects</h2>';
let HTMLprojectStart = '<div class="project-entry"></div>'
let HTMLprojectTitle = '<a href="#" target="_blank">%data%</a>'
let HTMLprojectSourceCodeLink = '<a style="float: right display: ~" href="#" target="_blank">source code >></a>'
let HTMLprojectDates = '<div class="date-text">%data%</div>'
let HTMLprojectDescription = '<p>%data%</p>'
let HTMLprojectCard = `
  <div class="project-card">
    <a href="%href%" target="_self">
      <div class="project-card-front">
        <img src="%data%" class="project-img">
      </div>
      <div class="project-card-back">
        <div class="project-card-title">%card-title%</div>
        <div class="project-card-description">%card-description%</div>
      </div>
    </a>
  </div>
`

let HTMLschoolSectionTitle = '<h2>Education</h2>';
let HTMLschoolStart = '<div class="education-entry"></div>'
let HTMLschoolName = '<a href="#" target="_blank">%data%'
let HTMLschoolDegree = ' - %data%</a>'
let HTMLschoolDates = '<div class="date-text">%data%</div>'
let HTMLschoolLocation = '<div class="location-text">%data%</div>'
let HTMLschoolMajor = '<em>Major: %data%</em>'
let HTMLschoolMinor = '<em>Minor: %data%</em>'

let HTMLonlineEnd = '<div>'
let HTMLonlineClasses = '<h3 class="onlineCourse">Online Classes</h3>'
let HTMLonlineTitle = '<a href="#" target="_blank">%data%'
let HTMLonlineSchool = ' - %data%</a>'
let HTMLonlineSchoolLogo = '<img src="%data%" class="logo">'
let HTMLonlineDates = '<div class="date-text">%data%</div>'
let HTMLonlineDescription = '<p>%data%</p>'

let HTMLh3Start = '<div class="h3-container">'
let googleMap = '<div id="map"></div>'


$(document).ready(function() {
  $('#sort-button').click(function() {
    let rep = swap($('#sort-button').html())
    $('#sort-button').html(rep)
    $("#workExperience-row").siblings().remove()
    work.display()
  })
})

let map

function initializeMap() {
  let locations
  let mapOptions = {
    disableDefaultUI: true,
    minZoom: 4,
    styles: mapStyles,
    keyboardShortcuts : false
  }

  map = new google.maps.Map(document.querySelector('#map'), mapOptions)

  function locationFinder() {
    let locations = []
    locations.push(bio.contacts.location)

    for (let school in education.schools) {
      locations.push(education.schools[school].location)
    }

    for (let job in work.jobs) {
      locations.push(work.jobs[job].location)
    }

    return locations
  }

  function createMapMarker(placeData) {
    let lat = placeData.geometry.location.lat()
    let lon = placeData.geometry.location.lng()
    let name = placeData.formatted_address
    let bounds = window.mapBounds
    let marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name,
      icon: '../images/svg/map-marker.svg'
    })

    let infoWindow = new google.maps.InfoWindow({
      content: name
    })

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker)
    })

    bounds.extend(new google.maps.LatLng(lat, lon))
    map.fitBounds(bounds)
    map.setCenter(bounds.getCenter())
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  function pinPoster(locations) {
    let service = new google.maps.places.PlacesService(map)

    for (let place in locations) {
      let request = {
        query: locations[place]
      }
      service.textSearch(request, callback)
    }
  }

  window.mapBounds = new google.maps.LatLngBounds()
  locations = locationFinder()
  pinPoster(locations)
}

window.addEventListener('load', initializeMap)
window.addEventListener('resize', function() {
  map.fitBounds(mapBounds)
})
