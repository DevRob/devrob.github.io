let bio = {
  // Bio with name, role, contacts, picture welcome msg and skills
  "name": "Robert Molnar",
  "role": "Software Developer",
  "contacts": {
      "email": {
          "icon": "email",
          "body": "mail.robertmolnar@gmail.com",
          "link": ""
      },
      "github": {
          "icon": "github",
          "body": "DevRob",
          "link": ""
      },
      "linkedin": {
          "icon": "linkedin",
          "body": "r0bertm0lnar",
          "link": "https://www.linkedin.com/in/r0bertm0lnar/"
      },
      "github": {
          "icon": "email",
          "body": "DevRob",
          "link": ""
      }
  },
  "picture": "",
  "welcome_msg": "I build websites and apps",
  "skills": ["Javascript", "HTML / CSS", "knockout.js", ".NET ( C# )", "Python", "MySQL", "Git"]
}

let education = {
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
          "url": "http://uni.sze.hu/en_GB/home"
      }
  ],
  "OnlineClasses": [
      {
          "course": "Front-End Web Developer",
          "school": "Udacity",
          "logos": ["images/GitHub.png", "images/HackReactor.png", "images/Google.png", "images/at&t.png", "images/udacity-tt-logo.svg"],
          "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
          "title": "About this Course",
          "description": "I've Learned the fundamentals of how the web works and gain a working knowledge\
                         of the three foundational languages that power each and every website: HTML, \
                         CSS and JavaScript. This Nanodegree provided an efficient path for me to able to build beautiful, \
                         responsive websites optimized for security and performance."
      },
      {
          "course": "Fundamentals of Computing Specialization",
          "school": "Coursera",
          "logos": ["images/Rice.jpg", "images/coursera.svg"],
          "url": "https://www.coursera.org/account/accomplishments/certificate/Q6HM3DEMBG8Y",
          "title": "About this Course",
          "description": "This Specialization covers much of the material that first-year Computer Science students take at Rice University. \
                          I learned various programming skills in Python from the ground up and applied these skills in building more \
                          than 20 fun projects. The Specialization concludes with a Capstone exam to demonstrate the range of knowledge I've acquired in this Specialization."
      },
      {
          "course": "Machine Learning",
          "school": "Coursera",
          "logos": ["images/Stanford.png", "images/coursera.svg"],
          "url": "https://www.coursera.org/learn/machine-learning",
          "title": "About this Course",
          "description": "This course is a part of the Machine Learning Specialization, \
                          Build and train supervised machine learning models for prediction and binary classification tasks, including linear regression and logistic regression"
      }
  ]
}

let work = {
  // Work experience section.
  "jobs": [
      {
          "employer": "DevEire",
          "url": "http://www.deveire.com/",
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

let projects = {
  // Projects I worked on I found worth to mention.
  "projects": [
      {
          "title": "CSS 3D Transform",
          "description": "Experimenting with 3D UI design. I did not find the benefit to filling out a swiveling web form, \
                      but it's fun to experiment with and a good coding challange.",
          "cards": [
              {
                  "title": "CSS 3D Transform",
                  "description": "Experimenting with 3D UI design. I did not find the benefit to filling out a swiveling web form, \
                  but it's fun to experiment with and a good coding challange.",
                  "media": "images/3DTransform.png"
              }
          ],
          "live_link": "http://devrob.github.io/3D-transforms/",
          "source_code_link": "https://github.com/DevRob/3D-transforms"
      },
      {
          "title": "Automated Email Feature for ERP System",
          "description": "Rework the old system so fellow developers can easily set up  different types of automated email and text \
                      messages such as order confirmation, notification about stock level or scheduled dispatch, periodic \
                      reports, special offers for customers. ",
          "images": ["images/svg/js.svg", "images/svg/mysql.svg", "images/svg/c_sharp.svg"],
          "live_link": "N/A",
          "source_code_link": "N/A",
          "cards": [
              {
                  "title": "JavaScript",
                  "description": "I used node.js to build a simple service that retrives data from the DB and send the text messages via API.",
                  "media": "images/svg/js.svg"
              },
              {
                  "title": "mySQL stored procedures",
                  "description": "Order confirmation, notification about stock level or scheduled dispatch, periodic reports, special offers for customers.",
                  "media": "images/svg/mysql.svg"
              },
              {
                  "title": "C# Email processor",
                  "description": "Procedd the data retrived from the DB and generate HTML with dynamic values.",
                  "media": "images/svg/c_sharp.svg"
              }
          ]
      },
      {
          "title": "Neighborhood Map",
          "description": "Develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit.\
                      Additional functionality to this application, including: map markers to identify popular locations or places you’d \
                      like to visit, a search function to easily discover these locations, and a listview to support simple browsing of \
                      all locations. Implement third-party APIs that provide additional information about each of these locations \
                      (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
          "images": [
              "images/svg/map.svg", "images/svg/jQuery.svg", "images/svg/knockout-js.svg"
          ],
          "live_link": "http://devrob.github.io/Places-APP/",
          "source_code_link": "https://github.com/DevRob/Places-APP",
          "cards": [
              {
                  "title": "Google Maps - Places API",
                  "description": "The Places API is a service that accepts HTTP requests for location data through a variety of methods. It returns formatted location data and imagery about establishments, geographic locations, or prominent points of interest.",
                  "media": "images/svg/map.svg"
              },
              {
                  "title": "jQuery",
                  "description": "This feature-rich JavaScript library makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.",
                  "media": "images/svg/jQuery.svg"
              },
              {
                  "title": "knockout-js",
                  "description": "Model-View-View Model(MVVM) - Easily associate DOM elements with model data using a concise, readable syntax. When your data model's state changes, your UI updates automatically. Implicitly set up chains of relationships between model data, to transform and combine it. Quickly generate sophisticated, nested UIs as a function of your model data",
                  "media": "images/svg/knockout-js.svg"
              }
          ]
      },

      {
          "title": "Unbeatable Tic-Tac-Toe",
          "description": "In this project I built a Tic-Tac-Toe game, that has an unbeatable A.I. player. \
                      The goal was to use Minimax Algorithm for decision making, so it's going to pick the best moves. \
                      The algorithm calculate all the possible moves available for the computer player and\
                      use some metric to determine the best possible move. I used Jasmin.js and Test Driven Development technique for this project.",
          "images": [
              "images/svg/jasmine.svg", "images/svg/ttt.svg", "images/svg/js.svg"
          ],
          "live_link": "http://devrob.github.io/TDD-Project-TTT",
          "source_code_link": "https://github.com/DevRob/TDD-Project-TTT",
          "cards": [
              {
                  "title": "Unbeatable Tic-Tac-Toe",
                  "description": "In this project I built a Tic-Tac-Toe game, that has an unbeatable A.I. player in sigle player mode and multiplayer option.",
                  "media": "images/svg/ttt.svg"
              },
              {
                  "title": "TDD with jasmin-js",
                  "description": "I used jasmin-js and Test Driven Development technique for this project.",
                  "media": "images/svg/jasmine.svg"
              },
              {
                  "title": "A.I. with JavaScript",
                  "description": "Minimax Algorithm for decision making and picking the best moves. \
                                  Calculate all the possible moves available for the computer player and \
                                  use some metric to determine the best possible move.",
                  "media": "images/svg/js.svg"
              }
          ]
      },

      {
          "title": "Classic Arcade Game Clone",
          "description": "I've been provided visual assets and a game loop engine; using these tools \
                      I added a number of entities to the game including the player characters and enemies to \
                      recreate the classic arcade game Frogger. Further more I implemented a map generator to \
                      able to easily add/remove/modify levels for the game.",
          "images": [
              "images/svg/game.svg", "images/svg/js.svg"
          ],
          "live_link": "http://devrob.github.io/Udacity-WebDev-project3/",
          "source_code_link": "https://github.com/DevRob/Udacity-WebDev-project3",
          "cards": [
              {
                  "title": "Frogger",
                  "description": "Experimenting with 3D UI design. I did not find the benefit to filling out a swiveling web form, \
                  but it's fun to experiment with and a good coding challange.",
                  "media": "images/svg/game.svg"
              },
              {
                  "title": "JavaScript",
                  "description": "Experimenting with 3D UI design. I did not find the benefit to filling out a swiveling web form, \
                  but it's fun to experiment with and a good coding challange.",
                  "media": "images/svg/js.svg"
              }
          ]
      },

      {
          "title": "Asteroids Game Clone",
          "description": "Implement a version of Asteroind computer game in Python. Spawn a ship and a set of asteroids, \
                      detect collisions between the ship and a rocks. Upon a collision, the rock should be destroyed and \
                      the player should lose a life. Spawn new missiles when firing using the space bar and destroy the \
                      rocks when they are hit by a missile checking collisions between two groups. Implement a scoring \
                      system.",
          "live_link": "https://py3.codeskulptor.org/#user308_ydj6LNsNpv_11.py",
          // "live_link":"https://py3.codeskulptor.org/#user308_qIVl3eVNRs_0.py",
          "source_code_link": "https://py3.codeskulptor.org/#user308_ydj6LNsNpv_11.py",
          "cards": [
              {
                  "title": "Asteroid",
                  "description": "Experimenting with 3D UI design. I did not find the benefit to filling out a swiveling web form, \
                  but it's fun to experiment with and a good coding challange.",
                  "media": "images/svg/spaceship.svg"
              },
              {
                  "title": "Python",
                  "description": "Experimenting with 3D UI design. I did not find the benefit to filling out a swiveling web form, \
                  but it's fun to experiment with and a good coding challange.",
                  "media": "images/svg/python.svg"
              }
          ]
      }
  ]
}