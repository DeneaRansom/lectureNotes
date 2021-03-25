/**
-Array destructuring allows oyu to unpakc values from arrays or even properties from objects, into distinct variables. 

-Destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assingment operator, which is where we defone what values to unpack from the source variable.

-Great for pulling information out of an array/object and assinging that data to its own variable
 */

const fullName = ["Denea", "Ransom", "Ms.", 
{months: 12, date: 2, year:1995}];
//const firstName = fullName[0];
//const lastName = fullName[1];

const[firstName, lastName, ...otherInfo] = fullName;
console.log("first:", firstName);
console.log("Last:", lastName);
console.log(otherInfo);