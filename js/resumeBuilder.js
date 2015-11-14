/*
 * work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.
 * projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.
 * bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.
 * education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/

var name = "Nichole Boseman";
var role = "Web Developer";

var bio = {
        "name" : "Nichole Boseman",
        "role" : "Web Developer",
        "welcomeMessage":"",
        "contacts" : {
            "telephone" : "(347) 292-7428",
            "email" : "bnboseman@gmail.com",
            "github" : "bnboseman"
        },
        "picture" : null,
        "welcome" : "Hello",
        "skills" : ["PHP", "Javascript", "jQuery"]
    };
var projects = {
    "projects" : [
        {
        "title":"Resume Project",
        "dates":2015,
        "description": "Project for Udacity javascript class",
        "images":["http://www.NicholeBoseman.com/wp-content/uploads/chanellegray-thumbnail.jpg", "http://www.NicholeBoseman.com/wp-content/uploads/chanellegray-thumbnail.jpg"  ],
        
        }
    ],
    "display": function() {
            for (project in this.projects) {
                 $("#projects").append(HTMLprojectStart);
                 var formattedTitle = HTMLprojectTitle .replace("%data%", this.projects[project].title);
                 $(".project-entry:last").append(formattedTitle);
                 var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
                 $(".project-entry:last").append(formattedDates);
                 var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
                 $(".project-entry:last").append(formattedDescription);
                 if (this.projects[project].images.length > 0) {
                    for (image in this.projects[project].images){
                        var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                 }
            }
    }
}
var work = {
    "jobs" : [
        {
            "employer":"New Hope Fertility",
            "title":"Web Developer",
            "location":"New York",
            "dates":2015,
            "description":"Updated websites"
        },
        {
            "employer":"Reflexions Data",
            "title":"Junior Web Developer",
            "location":"New York, NY",
            "dates":2015,
            "description":"Did Draftkings Playbook",
        } 
    ]
};

var education = {
    "schools" : [
        {
            "name" : "New York Institute of Technology",
            "city" : "Central Islip",
            "degree" : "BA",
            "major" : ["Computer Science"],
            "dates" : 2001
        },
        {
            "name" : "Nassau Community College",
            "city" : "Garden City",
            "degree" : "AS",
            "major" : ["Computer Science"],
            "dates" : 2010
        }
    ],
    "onlineCourses" : [
        {
            "title":"Javascript Basics",
            "school":"udacity",
            "dates":2015
        }
    ]
};
    
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$('#main').append(work)

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i=0; i<bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
    
}
var displayWork = function() {
        for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
       
        
        $(".work-entry:last").append(formattedEmployerTitle);
        
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();
projects.display();


var inName = function( name ) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
/*$(document).click(function(location) {
    console.log(location.pageX);
    
});*/