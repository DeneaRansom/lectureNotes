// ****
// Types 
// ****

/*
BOOLEANS

-Are Only True or False values
-Booleans are light light switches
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL
-Null is like an empty bucket, it has the capacity
to be filled, but it is currently not.
-Null is INTENTIONALLY left undefined
*/

//let emptyBucket = null;//
let emptyBucket = "water";

console.log(emptyBucket);

/*
UNDEFINED
-Current has no value assigned
-Acts as the means (material) to create the bucket
*/

//let metal; //correct way to assign undefined
//variable
let metal = undefined; //wrong way, it is redundant
//to initialize if it is not defined


console.log(metal);

// NULL VS. UNDEFINED
//*****
// -Null is like an empty bucket, the bucket
// is there, but there's nothing in it.
// -Undefined is like the materials we will use to create the bucket

/**
 NUMBERS
 -In JavaScript numbers are literally just numbers
 -You can add, subtract, multiply, and divide
 -You can use decimals
 */

 let degrees = 90;
 console.log(degrees);

//will console.log() as 999999999999999, less than 15 number = will stay the same
 let precise = 999999999999999;
 console.log(precise);

//will console.log() as 100000000000000, will round up at 15 numbers
 let rounded = 9999999999999999;
 console.log(rounded);

 //will console.log() as 0.30000000000000004
 let notQuite = 0.2 + 0.1
 console.log(notQuite);


// Function to convert a string to numbers IF that
//that string is a number
 let a = Number("123");
 console.log(a);

 /**
STRINGS
-A string is any value in between a set of quotes or backticks
-A string can be denoted by '',"",``
- 'string' === "string" === `string`
  */

  let stringOne = "double qoutes"
  let stringTwo = 'single quotes'
  console.log(stringOne, stringTwo);

  //Numbers vs Strings
  let addition = 1050 + 100
  console.log(addition);

  let concatenation = '1050' + 100
  console.log(concatenation);

  console.log(typeof addition);
  console.log(typeof concatenation);

 /**
OBJECTS
-Can be denoted by {}
-Objects store 2 things, a key and a value
-We can access these values, by digging into the object with dot notation -object.value
 */

 //Say we want to creat an app like spotify
 //We want to take in an artist name, amount of albums
 //they've produced, all the members still alive?

 let artist = {
     //key  //value
    name: 'Queen',
    albums: 15,
    allMembersAlive: false,
 }

console.log(artist); 
//Example of dot notation
 console.log(artist.name);
 console.log(artist.allMembersAlive);

 console.log(typeof artist);

 //how to add to object
 artist.songName = "I want it all"
 console.log(artist);

 //how to cnage an object's value
 artist.songName = "Bohemian Rhapsody"
 console.log(artist);

 /**
ARRAYS

let list = [ "item1" , "item2" , "item 3" ]
               (0)       (1)       (2)
 
-Denote by []
-You can access a value by digging into the array with array [0]               

  */

 let burritos = ["large", 4, true]

 //console.log() as an object
 console.log(typeof burritos); 

 

 //ADDITION VS CONCATENATION
 // Addition- adding numbers together in JavaScript
 // Concatention is adding string together

 let add = 100 + 100
 console.log(add);

 let concat = "Denea" + "Ransom"
 console.log(concat);

 let stillConcat = "1050" + 100
 console.log(stillConcat);

let firstName = 'Denea' 
let lastName = 'Ransom'
let houseNumber = '7901'
let street = 'FoxGlenDrive'
let city = 'Indianapolis'
let state = 'Indiana' 
let zipcode = '46235'

console.log(firstName + lastName + houseNumber + street + city + state + zipcode);
console.log(firstName, lastName, houseNumber, street, city, state, zipcode);