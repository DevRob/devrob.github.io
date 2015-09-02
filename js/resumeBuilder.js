var bio = {
    "name" : "Robert Molnar",
    "role" : "Junior Wev Deweloper",
    "contacts" : {
    "mobile" : "+353 87 925 6846",
    "email" : "mail.robertmolnar@gmail.com",
    "github" : "DevRob",
    "twitter" : "not yet",
    "location" : "Limerick, Ireland",
    },
    "picture" : "images/Profile_pic.jpg",
    "welcome_msg" : "Welcome to my site where I try to show my skills.",
    "skills" : ["HTML/CSS", "Javascript", "Git/GitHub", "python", "Bootstrap", "Octave", "JQuery", "AutoCAD"]
}

var education = {
    "schools": [
        {
            "name": "Széchenyi István University",
            "location": "Győr, Hungary",
            "degree": "BSc in Mechanical Engineering",
            "majors": ["Quality Assurance"]
            ,
            "dates": 2005
        }
    ],
    "OnlineClasses": [
        {
            "course": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        },
        {
            "course": "Fundamentals of Computing Specialization",
            "school": "Coursera, Rice University",
            "dates": 2015,
            "url": "https://www.coursera.org/specialization/fundamentalscomputing2/37?utm_medium=catalog"
        },
        {
            "course": "Programming for Everybody (Python)",
            "school": "Coursera, University of Michigan",
            "dates": 2015,
            "Certificate" : "https://www.coursera.org/account/accomplishments/certificate/TH99U2KTM2",
            "url": "https://www.coursera.org/course/pythonlearn"
        },
        {
            "course": "Machine Learning",
            "school": "Coursera, Stanford University",
            "dates": 2014,
            "Certificate" : "",
            "url": "https://www.coursera.org/learn/machine-learning/home/info"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "United Space Effort",
            "location": "St Louis",
            "position": "Test pilot",
            "dates": "2103 - future",
            "description": "Plans and conducts flight test activities. Formulates test procedures and conducts tests to evaluate structural integrity, performance, handling characteristics, reliability, and suitability of spacecraft and systems."
        },
        {
            "employer": "OCP",
            "location": "El Paso",
            "position": "Senior A.I. psycho Eng",
            "dates": "2100 - 2103",
            "description": "Teaching the subject about its moods, feelings, thoughts and behaviors and how to better respond to day to day challenges. These sessions includes interactive processes between the subject and me as a qualified mental health professional. Its purpose is the exploration of thoughts, feelings and behavior for the purpose of problem solving or achieving higher levels of functioning"
        },
        {
            "employer": "Federation",
            "location": "Orion Belt",
            "position": "Jump Freighter Captain",
            "dates": "2098 - 2100",
            "description": "As Captain I'm in charge of the operations of space vessels, such as Haulers, blockade-Runners, tugboats, freighters, barges or ferry boats. I maintain logs detailing a ship's course and speed, Anomalies and other factors that influence movement of the ship. I also manage ship's crew, supervise loading and unloading of either passengers or cargo and may be involved in the hiring of crew members. In many cases, work as a ship captain takes one away from home for extended periods of time."
        }
    ]
}

work.jobs = work.jobs.reverse();

var projects = {
    "projects": [
        {
        "title": "Omelette wedges",
        "dates": 2084,
        "description": "Finely chop the spring onions and set aside. Thickly slice the potatoes (there is no need to peel them first), then boil in a pan of lightly salted water for 10 mins until just tender. Drain. Meanwhile snip the bacon into pieces with scissors. Heat a frying pan with 1 tsp oil, then stir-fry the bacon until it turns pink. Add the spring onions to the pan, stir briefly for a couple of secs to slightly soften, then tip the bacon and onion into a bowl.",
        "images" : [
        "images/veggies.jpg",
        "images/omelette.jpg"
            ]
        }
    ]
}

bio.display = function() {
    $("#header-row1").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#header-row1").prepend(HTMLheaderName.replace("%data%", bio.name));
    for (contact in bio.contacts){
        var data = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
        var type = data.replace("%contact%", contact);
        $("#topContacts").append(type);
        $("#footerContacts").append(type);
    }
    $("#left-header").append(HTMLbioPic.replace("%data%", bio.picture));
    $("#left-header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        $("#skillsH3").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
    $("#right-header").append(HTMLWelcomeMsg.replace("%data%", bio.welcome_msg));
}

work.display = function(order){
    work.jobs = work.jobs.reverse();
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    }
}

projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        for (img in projects.projects[project].images){
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[img]));
        }
    }

}

education.display = function(){
    $("#education").append(HTMLschoolStart);
    for (school in education.schools){
        var title = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree)
        $(".education-entry:last").append(title);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
//        $(".education-entry:last").append(HTMLschoolMinor.replace("%data%", education.schools[school].minors));
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (onlineClass in education.OnlineClasses){
        var CourseSchool = HTMLonlineTitle.replace("%data%", education.OnlineClasses[onlineClass].course) + HTMLonlineSchool.replace("%data%", education.OnlineClasses[onlineClass].school)
        $(".education-entry:last").append(CourseSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.OnlineClasses[onlineClass].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%url%",education.OnlineClasses[onlineClass].url));
    }
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1]
}

function swap(val) {
    if (val == "earliest"){
        val = "latest";}
    else {
        val = "earliest";
    }
    return val
}

bio.display();
work.display();
projects.display();
education.display();

$("#workExperience-button").append(earliestButton.replace("%data%", "earliest"));
//$("#main").prepend(internationalizeButton);
$("#mapDiv").append(googleMap);
