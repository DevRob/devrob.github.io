function inName(e){return e=e.trim().split(" "),console.log(e),e[1]=e[1].toUpperCase(),e[0]=e[0].slice(0,1).toUpperCase()+e[0].slice(1).toLowerCase(),e[0]+" "+e[1]}function swap(e){return e="earliest"==e?"latest":"earliest"}var bio={name:"Robert Molnar",role:"Web Developer",contacts:{mobile:"+ 353 87 925 6846",email:"mail.robertmolnar@gmail.com",github:"DevRob",location:"Limerick, Ireland"},picture:"images/portrait.jpg",welcome_msg:"Junior Web Developer with hands-on experience in software development.     Specialized to build client-side application using HTML, CSS, Javascript and Responsive Web     Design techniques. Substantial experience with Google maps API, HTML document manipulation     with JQuery and data-binding with knockout.js. Familiar with frameworks like bootstrap,     version control like GitHub and wbsite optimization. Delivering minified HTML, CSS, js using node.js and gulp.   ",skills:["Javascript","HTML/CSS","Bootstrap","Python","GitHub","AutoCAD"]},education={schools:[{name:"Szechenyi Istvan University",location:"Gyor, Hungary",degree:"Bachelor of Science",majors:["Mechanical Engineering"],minors:["Quality Assurance"],dates:2005,url:"http://uni.sze.hu/en_GB/home"}],OnlineClasses:[{course:"Front-End Web Developer",school:"Udacity",logos:["images/GitHub.png","images/HackReactor.png","images/Google.png","images/at&t.png","images/udacity.png"],dates:2015,url:"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",description:"Learn the fundamentals of how the web works and gain a working knowledge                           of the three foundational languages that power each and every website: HTML,                            CSS and JavaScript. This Nanodegree will provide a guided, efficient path for                            you to learn to build beautiful, responsive websites optimized for security and performance."},{course:"Fundamentals of Computing Specialization",school:"Coursera",logos:["images/Rice.jpg","images/coursera.png"],dates:2015,url:"https://www.coursera.org/specialization/fundamentalscomputing2/37?utm_medium=spark_cdp_sidebar",description:"This series introduces students to the basics of analyzing and solving computational problems.                           It will provide students with a solid foundation in the mathematical and programming techniques                           that support creating efficient and well-designed solutions for such problems. The Specialization                           concludes with a Capstone project that allows you to apply the skills you've learned throughout the courses."},{course:"Machine Learning",school:"Coursera",logos:["images/Stanford.png","images/coursera.png"],dates:2014,url:"https://www.coursera.org/learn/machine-learning",description:"Machine learning is the science of getting computers to act without being explicitly programmed.                            In the past decade, machine learning has given us self-driving cars, practical speech recognition,                            effective web search, and a vastly improved understanding of the human genome."}]},work={jobs:[{employer:"Zimmer - Biomet",url:"http://www.zimmer.com/medical-professionals/products/knee.html",location:"Shannon, Ireland",position:"Product Builder",dates:"2010 - 2015",description:"Building Knee Replacement Products for healthcare specialists to treat disorders of, or injuries to, the bones, joints."},{employer:"JEA",url:"http://www.jea.ie/",location:"Dublin, Ireland",position:"Production/Design Engineer",dates:"2009",description:"AUTOMATED DESIGN SYSTEM.                             Developed an automated design system that generates blueprints and CNC Program                            Using AutoLisp and CNC Programming tools I reduced the design process from 3-4 hours to 15 min.                            Product Design /AutoCAD/, CNC Programming, Specifications, Quotations"},{employer:"Sumitomo Electric Industries, Ltd.",url:"http://global-sei.com/index.html",location:"Alattyan, Hungary",position:"Design Engineer/System Administrator",dates:"2001 - 2006",description:"ONLINE ORDERING SYSTEM.                             Leader of a project that opened an online window for the customers to our production                            They can place order, quotation-, sample-request and get access to production schedule online                            Product Design /AutoCAD, Pro/ENGINEER/, Specifications, Quotations"}]};work.jobs=work.jobs.reverse();var projects={projects:[{title:"Neighborhood Map",dates:2015,description:"Develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit.                        Additional functionality to this application, including: map markers to identify popular locations or places you’d                         like to visit, a search function to easily discover these locations, and a listview to support simple browsing of                         all locations. Implement third-party APIs that provide additional information about each of these locations                         (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",images:["images/map.jpg"],live_link:"http://devrob.github.io/Udacity-WebDev-project5/",source_code_link:"https://github.com/DevRob/Udacity-WebDev-project5"},{title:"Classic Arcade Game Clone",dates:2015,description:"I've been provided visual assets and a game loop engine; using these tools                         I added a number of entities to the game including the player characters and enemies to                         recreate the classic arcade game Frogger. Further more I implemented a map generator to                         able to easily add/remove/modify levels for the game.",images:["images/Frogger.jpg"],live_link:"http://devrob.github.io/Udacity-WebDev-project3/",source_code_link:"https://github.com/DevRob/Udacity-WebDev-project3"},{title:"Asteroids Game Clone",dates:2015,description:"Implement a version of Asteroind computer game in Python. Spawn a ship and a set of asteroids,                         detect collisions between the ship and a rocks. Upon a collision, the rock should be destroyed and                         the player should lose a life. Spawn new missiles when firing using the space bar and destroy the                         rocks when they are hit by a missile checking collisions between two groups. Implement a scoring                         system.",images:["images/Asteroid.png","images/Asteroid2.png"],live_link:"http://www.codeskulptor.org/#user40_VcUZGPuxbtBifOB.py",source_code_link:"http://www.codeskulptor.org/#user40_VcUZGPuxbtBifOB.py"}]};bio.display=function(){$("#header-row1").append(HTMLheaderRole.replace("%data%",bio.role)),$("#header-row1").prepend(HTMLheaderName.replace("%data%",bio.name));for(contact in bio.contacts){var e=HTMLcontactGeneric.replace("%data%",bio.contacts[contact]),o=e.replace("%contact%",contact);$("#topContacts").append(o),$("#footerContacts").append(o)}$("#left-header").append(HTMLbioPic.replace("%data%",bio.picture)),$("#left-header").append(HTMLskillsStart);for(skill in bio.skills)$("#skillsH3").append(HTMLskills.replace("%data%",bio.skills[skill]));$("#right-header").append(HTMLWelcomeMsg.replace("%data%",bio.welcome_msg))},work.display=function(e){work.jobs=work.jobs.reverse();for(job in work.jobs){$("#workExperience").append(HTMLworkStart);var o=HTMLh3Start+HTMLworkEmployer.replace("#",work.jobs[job].url),t=o.replace("%data%",work.jobs[job].employer),a=HTMLworkTitle.replace("%data%",work.jobs[job].position),i=t+a;$(".work-entry:last").append(i),$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates)),$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location)),$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description))}},projects.display=function(){for(project in projects.projects){var e=HTMLh3Start+HTMLprojectTitle.replace("#",projects.projects[project].live_link);$("#projects").append(HTMLprojectStart),$(".project-entry:last").append(e.replace("%data%",projects.projects[project].title)),$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates)),$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));for(img in projects.projects[project].images)$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[img]))}},education.display=function(){for(school in education.schools){$("#education").append(HTMLschoolStart);var e=HTMLh3Start+HTMLschoolName.replace("#",education.schools[school].url),o=e.replace("%data%",education.schools[school].name)+HTMLschoolDegree.replace("%data%",education.schools[school].degree);$(".education-entry:last").append(o),$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates)),$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location)),$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors)),$(".education-entry:last").append(HTMLschoolMinor.replace("%data%",education.schools[school].minors))}$(".education-entry:last").append(HTMLonlineClasses);for(onlineClass in education.OnlineClasses){var e=HTMLh3Start+HTMLonlineTitle.replace("#",education.OnlineClasses[onlineClass].url),t=e.replace("%data%",education.OnlineClasses[onlineClass].course)+HTMLonlineSchool.replace("%data%",education.OnlineClasses[onlineClass].school);for(logo in education.OnlineClasses[onlineClass].logos)t+=HTMLonlineSchoolLogo.replace("%data%",education.OnlineClasses[onlineClass].logos[logo]);$(".education-entry:last").append(t),$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.OnlineClasses[onlineClass].dates)),$(".education-entry:last").append(HTMLonlineEnd),$(".education-entry:last").append(HTMLonlineDescription.replace("%data%",education.OnlineClasses[onlineClass].description))}},bio.display(),work.display(),projects.display(),education.display(),$("#workExperience-button").append(earliestButton.replace("%data%","earliest")),$("#mapDiv").append(googleMap);