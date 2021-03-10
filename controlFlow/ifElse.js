let weather = 155;

if (weather < 70) {
    console.log("Wear a jacket!");
} else {
    console.log("No jacket necessary!");
}

let dname = "Denea";

if (dname == "Denea") {
    console.log("Hello, my name is " + dname);
} else {
    console.log('Hello, is your name ${dname}?');
}
//Challenge

let name = "zAchARy";
if (name.charAt(0) == name.charAt(0).toUpperCase()) {
    console.log(name);
}   else {
    console.log("hey, this isn't written correctly.");
}

//Silver

if(name[0] === name[0].toUpperCase()){
    console.log(name[0]);
} else {
    console.log(name.substr(1).toLowerCase());
}

//Gold
let results = "";

if(name[0] === name[0].toUpperCase()){
    results = (name[0]);
} else {
    results = name[0].toUpperCase() + name.substr(1).toLowerCase();
}

console.log(results);

 //console.log(results += name.substr(1).toLowerCase());

//Else If Statements

let age = 18

if (age <= 17) {
    console.log("Sorry you're too young to do anything.");
} else if (age >= 25) {
   console.log("You can rent a car!");
} else if (age >= 21) {
   console.log("You can drink!");
} else {
    console.log("You can vote");
}

if (age >= 25) {
    console.log("You can rent a car!");
} else if (age < 25 && age >= 21) {
    console.log("You can drink!");
} else if (age < 21 && age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Sorry you are too young to do anything");
}