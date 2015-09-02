<<<<<<< HEAD
/*

This file contains all the information abouut me. If I want to change something or add more project, education or work experience,
I just need to edit these JSONs and the website update itself dynamically.

*/

var bio = {
    // Bio with name, role, contacts, picture welcome msg and skills
    "name" : "Robert Molnar",
    "role" : "Web Debeloper",
    "contacts" : {
    "mobile" : "+ 353 87 925 6846",
    "email" : "mail.robertmolnar@gmail.com",
    "github" : "DevRob",
    "location" : "Limerick, Ireland",
    },
    "picture" : "images/portrait.jpg",
    "welcome_msg" : "Mechanical Engineer with hands-on experience in software development and as a Front-End Web Developer \
    Nanodegree student specializes in client-side application using Responsive Web Design techniques, HTML, CSS. Strong \
    background in JavaScript including object-oriented programming. Able to quickly evaluate options and strive to generate \
    elegant, simple solutions.",
    "skills" : ["Javascript", "HTML/CSS", "Bootstrap", "Python", "GitHub", "AutoCAD"]
}

var education = {
    // Education section with my degree and online courses.
    "schools": [
        {
            "name": "Szechenyi Istvan University",
            "location": "Gyor, Hungary",
            "degree": "Bachelor of Science",
            "majors": ["Mechanical Engineering"],
            "minors": [
                "Quality Assurance"
            ],
=======
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
>>>>>>> c89e874a44e552a56d5609bb32d40da31a8a0667
            "dates": 2005
        }
    ],
    "OnlineClasses": [
        {
<<<<<<< HEAD
            "course": "Front-End Web Developer",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
            "description":"Learn the fundamentals of how the web works and gain a working knowledge\
                           of the three foundational languages that power each and every website: HTML, \
                           CSS and JavaScript. This Nanodegree will provide a guided, efficient path for \
                           you to learn to build beautiful, responsive websites optimized for security and performance."
        },
        {
            "course": "Fundamentals of Computing Specialization",
            "school": "Coursera - Rice University",
            "dates": 2015,
            "url": "https://www.coursera.org/specialization/fundamentalscomputing2/37?utm_medium=spark_cdp_sidebar",
            "description":"This series introduces students to the basics of analyzing and solving computational problems. \
                          It will provide students with a solid foundation in the mathematical and programming techniques \
                          that support creating efficient and well-designed solutions for such problems. The Specialization \
                          concludes with a Capstone project that allows you to apply the skills you've learned throughout the courses."
        },
        {
            "course": "Machine Learning",
            "school": "Coursera - Stanford University",
            "dates": 2014,
            "url": "https://www.coursera.org/learn/machine-learning",
            "description":"Machine learning is the science of getting computers to act without being explicitly programmed. \
                           In the past decade, machine learning has given us self-driving cars, practical speech recognition, \
                           effective web search, and a vastly improved understanding of the human genome."
=======
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
>>>>>>> c89e874a44e552a56d5609bb32d40da31a8a0667
        }
    ]
}

var work = {
<<<<<<< HEAD
    // Work experience section.
    "jobs": [
        {
            "employer": "Zimmer - Biomet",
            "location": "Shannon, Ireland",
            "position": "Product Builder",
            "dates": "2010 - 2015",
            "description": "Building Knee Replacement Products for healthcare specialists to treat disorders of, or injuries to, the bones, joints.\
                            ACME Robots & Schütte CNC Grinders"
        },
        {
            "employer": "JEA",
            "location": "Dublin, Ireland",
            "position": "Production/Design Engineer",
            "dates": "2009",
            "description": "AUTOMATED DESIGN SYSTEM. \
                            Developed an automated design system that generates blueprints and CNC Program\
                            Using AutoLisp and CNC Programming tools I reduced the design process from 3-4 hours to 15 min.\
                            Product Design /AutoCAD/, CNC Programming, Specifications, Quotations"
        },
        {
            "employer": "Sumitomo Electric Industries, Ltd.",
            "location": "Alattyan, Hungary",
            "position": "Design Engineer/System Administrator",
            "dates": "2001 - 2006",
            "description": "ONLINE ORDERING SYSTEM. \
                            Leader of a project that opened an online window for the customers to our production\
                            They can place order, quotation-, sample-request and get access to production schedule online\
                            Product Design /AutoCAD, Pro/ENGINEER/, Specifications, Quotations"
=======
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
>>>>>>> c89e874a44e552a56d5609bb32d40da31a8a0667
        }
    ]
}

work.jobs = work.jobs.reverse();

var projects = {
<<<<<<< HEAD
    // Projects I worked on I found worth to mention.
    "projects": [
        {
        "title": "Neighborhood Map",
        "dates": 2015,
        "description": "Develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit.\
                        Additional functionality to this application, including: map markers to identify popular locations or places you’d \
                        like to visit, a search function to easily discover these locations, and a listview to support simple browsing of \
                        all locations. Implement third-party APIs that provide additional information about each of these locations \
                        (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
        "images" : [
        "images/map.png"
        ],
        "live_link": "http://devrob.github.io/Udacity-WebDev-project5/",
        "source_code_link": "https://github.com/DevRob/Udacity-WebDev-project5"

        },

        {
        "title": "Classic Arcade Game Clone",
        "dates": 2015,
        "description": "I've been provided visual assets and a game loop engine; using these tools \
                        I added a number of entities to the game including the player characters and enemies to \
                        recreate the classic arcade game Frogger. Further more I implemented a map generator to \
                        able to easily add/remove/modify levels for the game.",
        "images" : [
        "images/Frogger.png"
        ],
        "live_link": "http://devrob.github.io/Udacity-WebDev-project3/",
        "source_code_link": "https://github.com/DevRob/Udacity-WebDev-project3"

        },

        {
        "title": "Asteroids Game Clone",
        "dates": 2015,
        "description": "Implement a version of Asteroind copmuter game in Python. Spawn a ship and a set of asteroids, \
                        detect collisions between the ship and a rocks. Upon a collision, the rock should be destroyed and \
                        the player should lose a life. Spawn new missiles when firing using the space bar and destroy the \
                        rocks when they are hit by a missile checking collisions between two groups. Implement a scoring \
                        system.",
        "images" : [
        "images/Asteroid.png",
        "images/Asteroid2.png"
        ],
        "live_link": "http://www.codeskulptor.org/#user40_gSsssaJVoj_11.py",
        "source_code_link": "http://www.codeskulptor.org/#user40_gSsssaJVoj_11.py"
=======
    "projects": [
        {
        "title": "Omelette wedges",
        "dates": 2084,
        "description": "Finely chop the spring onions and set aside. Thickly slice the potatoes (there is no need to peel them first), then boil in a pan of lightly salted water for 10 mins until just tender. Drain. Meanwhile snip the bacon into pieces with scissors. Heat a frying pan with 1 tsp oil, then stir-fry the bacon until it turns pink. Add the spring onions to the pan, stir briefly for a couple of secs to slightly soften, then tip the bacon and onion into a bowl.",
        "images" : [
        "images/veggies.jpg",
        "images/omelette.jpg"
            ]
>>>>>>> c89e874a44e552a56d5609bb32d40da31a8a0667
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
<<<<<<< HEAD
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
=======
    $("#education").append(HTMLschoolStart);
    for (school in education.schools){
>>>>>>> c89e874a44e552a56d5609bb32d40da31a8a0667
        var title = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree)
        $(".education-entry:last").append(title);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
<<<<<<< HEAD
        $(".education-entry:last").append(HTMLschoolMinor.replace("%data%", education.schools[school].minors));
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (onlineClass in education.OnlineClasses){
        var url = HTMLonlineTitle.replace("#",education.OnlineClasses[onlineClass].url);
        var CourseSchool = url.replace("%data%", education.OnlineClasses[onlineClass].course) +
                           HTMLonlineSchool.replace("%data%", education.OnlineClasses[onlineClass].school)
        $(".education-entry:last").append(CourseSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.OnlineClasses[onlineClass].dates));
        $(".education-entry:last").append(HTMLonlineDescription.replace("%data%", education.OnlineClasses[onlineClass].description));
=======
//        $(".education-entry:last").append(HTMLschoolMinor.replace("%data%", education.schools[school].minors));
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (onlineClass in education.OnlineClasses){
        var CourseSchool = HTMLonlineTitle.replace("%data%", education.OnlineClasses[onlineClass].course) + HTMLonlineSchool.replace("%data%", education.OnlineClasses[onlineClass].school)
        $(".education-entry:last").append(CourseSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.OnlineClasses[onlineClass].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%url%",education.OnlineClasses[onlineClass].url));
>>>>>>> c89e874a44e552a56d5609bb32d40da31a8a0667
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
<<<<<<< HEAD
=======
//$("#main").prepend(internationalizeButton);
>>>>>>> c89e874a44e552a56d5609bb32d40da31a8a0667
$("#mapDiv").append(googleMap);
