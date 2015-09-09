var bio = {
	"name" : "Guillermo Jimenez",
	"role" : "Fron End Web Developer",
	"contacts" : 
			{
				"mobile": "809-555-5555",
				"email" : "guillermoespinal@gmail.com",
				"github" : "gjespinal",
				"twitter" : "@gjespinal",
				"location" : "Santo Domingo, Dominican Republic"
			},
	"welcomeMessage" : "Welcome to my Resume",
	"skills" :[
		"Awesomess", 
		"Good", 
		"Good", 
		"Good"
		],
	"bioPic" : "images/my_pic.jpg"
	};

/* Begin of Bio Section */
bio.display = function(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var	formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic).prepend(formattedRole).prepend(formattedName);
	

var	formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").prepend(formattedMobile);
var	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
var	formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
var	formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
var	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMsg);

//Skills Section
if (bio.skills.length) {
$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
};
}
bio.display();
/*End of Bio Section*/

var	education = {
	"University": [
	 {
		"name" :  "Unibe",
		"location" : "Dominican Republic",
		"degree" : "BC",
		"majors" : ["CS"],
		"dates" : 2014,
		"url" : "http://www.unibe.edu.do/"
	}

],
	"onlineCourses" : [
		{
			"title": "Nanodegree Front End Web Developer",
			"school": "Udacity",
			"date": 2015,
			"url": "http://udacity.com/"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Emevenca Dominicana",
			"title" : "QA",
			"location" : "Santigo, Dominican Republic",
			"dates" : "December 2nd 2013 - Current",
			"description" : "Write this later...I dont have enough time"
		},
		{
			"employer" : "Simetrica Consulting",
			"title" : "Oracle Junior",
			"location" : "Samana, Dominican Republic",
			"dates" : "April 2014",
			"description" : "Write this later...I dont have enough time"
		}
		
	]
};

var	projects = {
		"projects" : [
		{
			"title": "androtek",
			"dates" : "Sep 3 2014 - current",
			"description" : "Write this later...I dont have enough time",
			"images" : ["https://placeimg.com/197/148/tech", "https://placeimg.com/197/148/arch"]
		}
	]
};



/*Begin of Work Section*/
work.display = function() {
	for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var	formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
	var formattedEmployerTitle	= formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

	}
}

	work.display();
// /*End of Work Section*/

// /*Begin of Education Section*/
education.display = function() {

	for (studies in education.University, education.onlineCourses){
	$("#education").append(HTMLschoolStart);

	var	formattedSchool = HTMLschoolName.replace("%data%", education.University[studies].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.University[studies].degree);
	var formattedUniTitle = formattedSchool + formattedDegree;
	$(".education-entry:last").append(formattedUniTitle);
	var	formattedDates = HTMLschoolDates.replace("%data%", education.University[studies].dates);
	$(".education-entry:last").append(formattedDates);
	
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.University[studies].majors);
	$(".education-entry:last").append(formattedMajor);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.University[studies].location);
	$(".education-entry:last").append(formattedLocation);
	}
	$('#education').append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for (online in education.onlineCourses){
	var	formattedTitle = HTMLschoolName.replace("%data%", education.onlineCourses[online].title);
	var formattedSchool = HTMLschoolDegree.replace("%data%", education.onlineCourses[online].school);
	var formattedOnline = formattedTitle + formattedSchool;
	$(".education-entry:last").append(formattedOnline);
	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
	$(".education-entry:last").append(formattedDates);
	var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
	$(".education-entry:last").append(formattedUrl);

			}
}
	education.display();
	/*End of Education Section*/

	/*Begin of Project*/
projects.display = function() {

for (project in projects.projects){
$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
	
	if (projects.projects[project].images.length){
		for (image in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
		}
	}
}

}
	projects.display();
		/*End of Project Section*/


$("#mapDiv").append(googleMap);


/* Begin of footer Section */
var	formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var	formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var	formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").prepend(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);

