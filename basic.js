// title
document.getElementById("title").innerHTML = "Java Script Basics"
document.getElementById("title").style.backgroundColor = "gray"

// paragraph

document.getElementById("para").style.color = "yellow"
document.getElementById("para").style.backgroundColor = "black"
document.getElementById("para").style.padding = "20px"
document.getElementById("para").style.fontSize = "30px"

// alert 

alert("Learning Java Script")

// console 

console.log("Akhil")
console.log(20+20)

// variable 
var a = 10;
var b = 20;
var c = a+b
console.log(c)
console.log(typeof a, typeof b, typeof c)
//
var a = "we"
var b = "me"
var c = a + b
console.log(c)
console.log(typeof a, typeof b, typeof c)
// 
var CourseName = "FrontEnd Development"
var Duration = "45 to 60 Days."
var CurrentProject = "Mahindra. "
var _toolsLearned = "Github, vsCode, Netlify. "
var $first_Project = "Basic html Page"
var place = "Ameerpet."
var courseOverView = "We are learning" + " "
                + CourseName + " " + "Course." + " "
                + "The Duration of the course is" + " " 
                + Duration + " " + "Current project" + " " 
                + CurrentProject + "Tools that we learned " 
                + _toolsLearned + "Our first page is " 
                + $first_Project + ". Location:- " + place 
console.log(courseOverView)                