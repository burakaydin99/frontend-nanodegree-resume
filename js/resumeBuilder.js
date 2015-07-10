/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var awesomeThoughts = "I'm Burak AYDIN";
 var funThoughts = awesomeThoughts.replace("Burak","Osman");
console.log(awesomeThoughts);
console.log(funThoughts);
 $("#main").append(funThoughts);
 var formattedName = HTMLheaderName.replace("%data%","Burak AYDIN");
 var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*
var str1 = 'audacity';
var str2 = str1.slice(0,-4);
console.log(str2); 

 */

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    var result = s.replace("auda","uda")
    return result;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));


var s = "audacity";
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    r1 = s[1].toUpperCase();
    r2 = s[4].toUpperCase();
    r3 = s.slice(2);
    result = r1 + r3;
    return result;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));