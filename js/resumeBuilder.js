navigation.display = function() {
    let nav = [
        {
            title: "projects",
            anchor: "#projects"
        },
        {
            title: "bettering",
            anchor: "#education"
        },
        {
            title: "work",
            anchor: "#work"
        },
        {
            title: "about",
            anchor: "#about"
        }
    ]

    nav.forEach(item => {
        console.log({item})
        $('#navigation').append(
            HTMLnavItem.replace("%anchor%", item.anchor).replace("%title%", item.title)
        )
    })
}

bio.display = function () {
    for (contact in bio.contacts) {
        let data = HTMLcontactGeneric.replace("%data%", bio.contacts[contact])
        let type = data.replace("%contact%", contact)
        $("#topContacts").append(type)
        $("#footerContacts").append(type)
    }
    $("#biopic").append(HTMLbioPic.replace("%data%", bio.picture))
    $("#skills").append(HTMLskillsStart)
    for (skill in bio.skills) {
        $("#skillsH3").append(HTMLskills.replace("%data%", bio.skills[skill]))
    }
    $("#welcome").append(HTMLWelcomeMsg.replace("%data%", bio.welcome_msg))
}

work.display = function () {
    let workExperienceArticle = $("#workExperience").append(HTMLworkSectionTitle)
    for (job in work.jobs) {
        workExperienceArticle.append(HTMLworkStart)
        let url = HTMLh3Start + HTMLworkEmployer.replace("#", work.jobs[job].url)
        let formattedEmployer = url.replace("%data%", work.jobs[job].employer)
        let formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position)
        let formattedEmployerTitle = formattedEmployer + formattedTitle
        $(".work-entry:last").append(formattedEmployerTitle)
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates))
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location))
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description))
    }
}

projects.display = function () {
    $("#projects .lead-content").append(HTMLprojectSectionTitle)
    let projectArticle = $(".project-entries")
    for (project in projects.projects) {
        let projectTitle = HTMLprojectTitle
        let projectCode = HTMLprojectSourceCodeLink
        let url = ""

        if (projects.projects[project].live_link == "N/A") {
            projectTitle = projectTitle.replace("_blank", "")
        } else {
            projectTitle = projectTitle.replace("#", projects.projects[project].live_link)
        }
        if (projects.projects[project].source_code_link == "N/A") {
            projectCode = projectCode.replace("~", "none")
        } else {
            projectCode = projectCode.replace("#", projects.projects[project].source_code_link)
            projectCode = projectCode.replace("~", "block")
        }

        url = HTMLh3Start + projectTitle + projectCode
        projectArticle.append(HTMLprojectStart)
        $(".project-entry:last").append(url.replace("%data%", projects.projects[project].title))
        $(".project-entry:last").append('<div class="project-card-container"></div>')
        
        projects.projects[project].cards.forEach(card => {
            $(".project-card-container:last").append(
                HTMLprojectCard.replace("%data%", card.media)
                    .replace("%card-title%", card.title)
                    .replace("%card-description%", card.description)
            )
        })
        // $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description))
    }
}

education.display = function () {
    $("#education .lead-content").append(HTMLschoolSectionTitle)
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart)
        let url = HTMLh3Start + HTMLschoolName.replace("#", education.schools[school].url)
        let title = url.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree)
        $(".education-entry:last").append(title)
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location))
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors))
        $(".education-entry:last").append(HTMLschoolMinor.replace("%data%", education.schools[school].minors))
    }

    $(".education-entry:last").append(HTMLonlineClasses)
    for (onlineClass in education.OnlineClasses) {
        let url = HTMLh3Start + HTMLonlineTitle.replace("#", education.OnlineClasses[onlineClass].url)
        let CourseSchool = url.replace("%data%", education.OnlineClasses[onlineClass].course) +
            HTMLonlineSchool.replace("%data%", education.OnlineClasses[onlineClass].school)
        for (logo in education.OnlineClasses[onlineClass].logos) {
            CourseSchool += HTMLonlineSchoolLogo.replace("%data%", education.OnlineClasses[onlineClass].logos[logo])
        }
        $(".education-entry:last").append(CourseSchool)

        $(".education-entry:last").append(HTMLonlineEnd)
        $(".education-entry:last").append(HTMLonlineDescription.replace("%data%", education.OnlineClasses[onlineClass].description))
    }
}

navigation.display()
bio.display()
// work.display()
projects.display()
education.display()

$("#mapDiv").append(googleMap)
// fetch('https://www.instagram.com/spacex/').then(data => console.log({data}))

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        $("#header").attr('data-scroll', true)
    } else {
        $("#header").attr('data-scroll', false)
    }
})