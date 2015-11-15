var bio = {
    "name": "Nichole Boseman",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my resume",
    "contacts": {
        "mobile": "(347) 292-7428",
        "email": "bnboseman@gmail.com",
        "github": "bnboseman",
        "location": "New York, NY"
    },
    "picture": null,
    "welcome": "Hello",
    "skills": ["PHP", "Javascript", "jQuery"],
    "biopic": "http://www.NicholeBoseman.com/wp-content/uploads/me.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $("#header").prepend(formattedName, formattedRole, formattedPic, formattedMessage);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedLocation);
        // skill loop
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            };
        };
    }
};
var projects = {
    "projects": [{
        "title": "Resume Project",
        "dates": 2015,
        "description": "Project for Udacity javascript class",
        "images": ["http://www.NicholeBoseman.com/wp-content/uploads/chanellegray-thumbnail.jpg", "http://www.NicholeBoseman.com/wp-content/uploads/chanellegray-thumbnail.jpg"],

    }],
    "display": function() {
        for (project in this.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            if (this.projects[project].images.length > 0) {
                for (image in this.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
}
var work = {
    "jobs": [{
        "employer": "New Hope Fertility",
        "title": "Web Developer",
        "location": "New York, NY",
        "dates": "June 2015 - Present",
        "description": "Updated websites"
    }, {
        "employer": "Reflexions Data",
        "title": "Junior Web Developer",
        "location": "New York, NY",
        "dates": "March 2015 - May 2015",
        "description": "Did Draftkings Playbook",
    }, {
        "employer": "Solidoodle",
        "title": "Junior Web Developer",
        "location": "New York, NY",
        "dates": "November 2014 - Febuary 2015",
        "description": "Created www.solidoodles.com",
    }],
    "display": function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;


            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var education = {
    "schools": [{
        "name": "New York Institute of Technology",
        "location": "Central Islip, NY",
        "degree": "BA",
        "major": ["Computer Science"],
        "dates": 2001,
        "url": "http://nyit.edu"
    }, {
        "name": "Nassau Community College",
        "location": "Garden City, NY",
        "degree": "AS",
        "major": ["Computer Science"],
        "dates": 2010,
        "url": "http://ncc.edu"
    }],
    "onlineCourses": [{
        "title": "Javascript Basics",
        "school": "udacity",
        "date": 2015,
        "url": "http://udacity.com"
    }],
    "display": function() {
        for (schools in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
            $(".education-entry:last").append(formattedMajor);
        }
        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);
            for (course in education.onlineCourses) {
                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                var formattedSchoolTitle = formattedTitle + formattedSchool;
                $(".education-entry:last").append(formattedSchoolTitle);
                var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                $(".education-entry:last").append(formattedDates);
                var formattedURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);
                $(".education-entry:last").append(formattedURL);
            };
        };
    }
};
bio.display();
education.display();
work.display();
projects.display();


var inName = function() {
    names = bio.name.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    return names[0] + " " + names[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);