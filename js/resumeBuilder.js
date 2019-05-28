

var bio = {
    // Bio with name, role, contacts, picture welcome msg and skills
    "name" : "Robert Molnar",
    "role" : "Software Developer",
    "contacts" : {
    "mobile" : "+ 353 87 925 6846",
    "email" : "mail.robertmolnar@gmail.com",
    "github" : "DevRob",
    "location" : "Limerick, Ireland",
    },
    "picture" : "images/portrait.jpg",
    "welcome_msg" : "Software Developer experienced with object-oriented and functional \
                    programming languages. Working with server and client side applications \
                    using HTML, CSS, Javascript, .NET, MySQL. Familiar with Responsive Web \
                    Design techniques, Google Maps API, JQuery and data-binding with knockout.js. \
                    Highly value re-usable, maintainable, self-documenting code. Fast learner and \
                    open to using new technologies and frameworks.",
    "skills" : ["Javascript", "HTML / CSS", "knockout.js", ".NET ( C# )", "Python", "MySQL", "Git"]
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
            "dates": 2005,
            "url": "http://uni.sze.hu/en_GB/home"
        }
    ],
    "OnlineClasses": [
        {
            "course": "Front-End Web Developer",
            "school": "Udacity",
            "logos": ["images/GitHub.png", "images/HackReactor.png", "images/Google.png", "images/at_t.png", "images/udacity.png"],
            "dates": 2015,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
            "description":"Learn the fundamentals of how the web works and gain a working knowledge\
                           of the three foundational languages that power each and every website: HTML, \
                           CSS and JavaScript. This Nanodegree will provide a guided, efficient path for \
                           you to learn to build beautiful, responsive websites optimized for security and performance."
        },
        {
            "course": "Fundamentals of Computing Specialization",
            "school": "Coursera",
            "logos": ["images/Rice.jpg", "images/coursera.png"],
            "dates": 2015,
            "url": "https://www.coursera.org/specialization/fundamentalscomputing2/37?utm_medium=spark_cdp_sidebar",
            "description":  "This Specialization covers much of the material that first-year Computer Science students take at Rice University. \
                            Students learn sophisticated programming skills in Python from the ground up and apply these skills in building more \
                            than 20 fun projects. The Specialization concludes with a Capstone exam that allows the students to demonstrate the \
                            range of knowledge that they have acquired in the Specialization."
        },
        {
            "course": "Machine Learning",
            "school": "Coursera",
            "logos": ["images/Stanford.png", "images/coursera.png"],
            "dates": 2014,
            "url": "https://www.coursera.org/learn/machine-learning",
            "description":"Machine learning is the science of getting computers to act without being explicitly programmed. \
                           In the past decade, machine learning has given us self-driving cars, practical speech recognition, \
                           effective web search, and a vastly improved understanding of the human genome."
        }
    ]
}

var work = {
    // Work experience section.
    "jobs": [
        {
            "employer": "DevEire",
            "url": "http://www.goodside.ie/",
            "location": "Limerick, Ireland",
            "position": "Front End Developer",
            "dates": "2019 -",
            "description": "Front end Developer using HTML, CSS, JS, jQuery, handlebars, less, node.js, gulp, yarn, brew, \
                            GitHub, Travis CI. Working on several projects mainly with teams from the US(East-West) and Ireland \
                            across different time zones. Building UI from mockup/Design Spec. and provide options on loosely \
                            specified project details. Creating customized audience attention tracking solutions. \
                            Pushing the acquired data to marketing platforms such as zeta and Parse.ly using their API."
        },
        {
            "employer": "Ordorite Software Solutions",
            "url": "https://www.ordorite.com/",
            "location": "Galway, Ireland",
            "position": "Software Developer",
            "dates": "2016 - 2019",
            "description": "End-to-end feature development for custom ERP system using JavaScript, CSS, HTML \
                            front-end, .NET rules engine project and MySQL with complex stored procedures and \
                            transaction. We use GIT and bitbucket for version control."
        },
        {
            "employer": "Udacity",
            "url": "https://www.udacity.com",
            "location": "Montain View (Online), from Ireland",
            "position": "Code Reviewer",
            "dates": "2015 - 2017",
            "description": "I review code and projects submitted by Front-End Web Developer Nanodegree students.\
                            I verify if the students follow the specification of the projects and Udacity's Style \
                            Guide in their code. While I review codes and evaluate projects I also give helpful \
                            feedback and provide useful sources to improve their knowledge and techniques."
        },
        {
            "employer": "Udacity",
            "url": "https://www.udacity.com",
            "location": "Montain View (Online), from Ireland",
            "position": "Team Guide",
            "dates": "2015",
            "description": "As a Guide, I facilitate study sessions with my team once a week help other \
                            students commit to their studies week after week, develop positive group \
                            dynamics, provide feedback as students have questions, and set expectations for weekly progress."
        },
        {
            "employer": "Zimmer - Biomet",
            "url": "http://www.zimmer.com/medical-professionals/products/knee.html",
            "location": "Shannon, Ireland",
            "position": "Product Builder",
            "dates": "2010 - 2015",
            "description": "Building Knee Replacement Products for healthcare specialists \
                            to treat disorders of, or injuries to, the bones, joints."
        },
        {
            "employer": "JEA",
            "url": "http://www.jea.ie/",
            "location": "Dublin, Ireland",
            "position": "Production/Design Engineer",
            "dates": "2009",
            "description": "AUTOMATED DESIGN SYSTEM. \
                            Developed an automated design system that generates blueprints and CNC Program\
                            Using AutoLisp and CNC Programming tools I reduced the design process from 3-4 hours to 15 min."
        },
        {
            "employer": "NNG Construction Ltd.",
            "url": "N/A",
            "location": "Budapest, Hungary",
            "position": "Project Manager",
            "dates": "2006 - 2009",
            "description": "Plan, budget, oversee and document all aspects of the specific project. Make sure \
                            that the scope and direction of each project are on schedule. Provide technical support \
                            for the production team. Negotiate with and hire subcontractors."
        },
        {
            "employer": "Sumitomo Electric Industries, Ltd.",
            "url": "http://global-sei.com/index.html",
            "location": "Alattyan, Hungary",
            "position": "Design Engineer/System Administrator",
            "dates": "2001 - 2006",
            "description": "ONLINE ORDERING SYSTEM. \
                            A project that opened an online window for the customers to our production\
                            They can place order, quotation-, sample-request and get access to production schedule online."
        }
    ]
}

var projects = {
    // Projects I worked on I found worth to mention.
    "projects": [
        {
        "title": "CSS 3D Transform",
        "dates": 2017,
        "description": "Experimenting with 3D UI design. I did not find the benefit to filling out a swiveling web form, \
                        but it's fun to experiment with and a good coding challange.",
        "images" : ["images/3DTransform.png"],
        "live_link": "http://devrob.github.io/3D-transforms/",
        "source_code_link": "https://github.com/DevRob/3D-transforms"
        },
        {
        "title": "Automated Email Feature for ERP System",
        "dates": 2016,
        "description": "Rework the old system so fellow developers can easily set up  different types of automated email \
                        messages such as order confirmation, notification about stock level or scheduled dispatch, periodic \
                        reports, special offers for customers. ",
        "images" : ["images/JS.png", "images/MySQL.png", "images/cSharp.png"],
        "live_link": "N/A",
        "source_code_link": "N/A"
        },
        {
        "title": "Neighborhood Map",
        "dates": 2015,
        "description": "Develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit.\
                        Additional functionality to this application, including: map markers to identify popular locations or places you’d \
                        like to visit, a search function to easily discover these locations, and a listview to support simple browsing of \
                        all locations. Implement third-party APIs that provide additional information about each of these locations \
                        (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
        "images" : [
        "images/map.jpg", "images/map2.jpg", "images/map3.jpg"
        ],
        "live_link": "http://devrob.github.io/Places-APP/",
        "source_code_link": "https://github.com/DevRob/Places-APP"
        },

        {
        "title": "Unbeatable Tic-Tac-Toe",
        "dates": 2015,
        "description": "In this project I built a Tic-Tac-Toe game, that has an unbeatable A.I. player. \
                        The goal was to use Minimax Algorithm for decision making, so it's going to pick the best moves. \
                        The algorithm calculate all the possible moves available for the computer player and\
                        use some metric to determine the best possible move. I used Jasmin.js and Test Driven Development technique for this project.",
        "images" : [
        "images/jasmine.png", "images/ttt.jpg", "images/ttt2.jpg"
        ],
        "live_link": "http://devrob.github.io/TDD-Project-TTT",
        "source_code_link": "https://github.com/DevRob/TDD-Project-TTT"
      },

        {
        "title": "Feed Reader Testing",
        "dates": 2015,
        "description": "In this project I'm testing with Jasmine Javascript Library. Testing is an important part of\
         the development process and many organizations practice a standard known as test-driven development or TDD. This \
         is when developers write tests first, before they ever start developing their application. Whether you work in \
         an organization that writes tests extensively to inform product development or one that uses tests to encourage \
         iteration, testing has become an essential skill in modern web development!",
        "images" : [
        "images/jasmine.png", "images/jasmine2.jpg"
        ],
        "live_link": "http://devrob.github.io/Udacity-WebDev-project6/",
        "source_code_link": "https://github.com/DevRob/Udacity-WebDev-project6"
        },

        {
        "title": "Classic Arcade Game Clone",
        "dates": 2015,
        "description": "I've been provided visual assets and a game loop engine; using these tools \
                        I added a number of entities to the game including the player characters and enemies to \
                        recreate the classic arcade game Frogger. Further more I implemented a map generator to \
                        able to easily add/remove/modify levels for the game.",
        "images" : [
        "images/Frogger.jpg", "images/Frogger2.jpg"
        ],
        "live_link": "http://devrob.github.io/Udacity-WebDev-project3/",
        "source_code_link": "https://github.com/DevRob/Udacity-WebDev-project3"
        },

        {
        "title": "Asteroids Game Clone",
        "dates": 2015,
        "description": "Implement a version of Asteroind computer game in Python. Spawn a ship and a set of asteroids, \
                        detect collisions between the ship and a rocks. Upon a collision, the rock should be destroyed and \
                        the player should lose a life. Spawn new missiles when firing using the space bar and destroy the \
                        rocks when they are hit by a missile checking collisions between two groups. Implement a scoring \
                        system.",
        "images" : [
        "images/Asteroid2.png"
        ],
        "live_link": "http://www.codeskulptor.org/#user40_VcUZGPuxbtBifOB.py",
        "source_code_link": "http://www.codeskulptor.org/#user40_VcUZGPuxbtBifOB.py"
      }
    ]
}

work.jobs = work.jobs.reverse();

bio.display = function() {
    $("#role").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#name").prepend(HTMLheaderName.replace("%data%", bio.name));
    for (contact in bio.contacts){
        var data = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
        var type = data.replace("%contact%", contact);
        $("#topContacts").append(type);
        $("#footerContacts").append(type);
    }
    $("#biopic").append(HTMLbioPic.replace("%data%", bio.picture));
    $("#skills").append(HTMLskillsStart);
    for (skill in bio.skills) {
        $("#skillsH3").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
    $("#right-header").append(HTMLWelcomeMsg.replace("%data%", bio.welcome_msg));
}

work.display = function(){
    work.jobs = work.jobs.reverse();
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var url = HTMLh3Start + HTMLworkEmployer.replace("#", work.jobs[job].url);
        var formattedEmployer = url.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

projects.display = function(){

    for (project in projects.projects){
        var projectTitle = HTMLprojectTitle;
        var projectCode = HTMLprojectSourceCodeLink;
        var url = "";

        if (projects.projects[project].live_link == "N/A") {
          projectTitle = projectTitle.replace("_blank", "");
        } else {
          projectTitle = projectTitle.replace("#", projects.projects[project].live_link);
        }
        if (projects.projects[project].source_code_link == "N/A") {
          projectCode = projectCode.replace("~", "none");
        } else {
          projectCode = projectCode.replace("#", projects.projects[project].source_code_link);
          projectCode = projectCode.replace("~", "block");
        }

        url = HTMLh3Start + projectTitle + projectCode;

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(url.replace("%data%", projects.projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        for (img in projects.projects[project].images){
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[img]));
        }
    }

}

education.display = function(){
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
        var url = HTMLh3Start + HTMLschoolName.replace("#", education.schools[school].url)
        var title = url.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree)
        $(".education-entry:last").append(title);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
        $(".education-entry:last").append(HTMLschoolMinor.replace("%data%", education.schools[school].minors));
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (onlineClass in education.OnlineClasses){
        var url = HTMLh3Start + HTMLonlineTitle.replace("#",education.OnlineClasses[onlineClass].url);
        var CourseSchool = url.replace("%data%", education.OnlineClasses[onlineClass].course) +
                           HTMLonlineSchool.replace("%data%", education.OnlineClasses[onlineClass].school);
        for (logo in education.OnlineClasses[onlineClass].logos) {
          CourseSchool += HTMLonlineSchoolLogo.replace("%data%", education.OnlineClasses[onlineClass].logos[logo]);
        }
        $(".education-entry:last").append(CourseSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.OnlineClasses[onlineClass].dates));

        $(".education-entry:last").append(HTMLonlineEnd);
        $(".education-entry:last").append(HTMLonlineDescription.replace("%data%", education.OnlineClasses[onlineClass].description));
    }
}

function swap(val) {
    if (val == "latest"){
        val = "earliest";}
    else {
        val = "latest";
    }
    return val
}

bio.display();
work.display();
projects.display();
education.display();

$("#workExperience-button").append(earliestButton.replace("%data%", "earliest"));
$("#mapDiv").append(googleMap);
