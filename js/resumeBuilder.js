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
        "images":[]
        }
    ]
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
            "description":"Did Draftkings Playbook"
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