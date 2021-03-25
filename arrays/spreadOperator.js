/**
-The spread operator essentially pull out all elements of an array and gives them to you as a stand alone list of elements. 
-denoted by ...
 */

const fullName = ["Denea", "Ransom"] 
//const elements = ...fullName;
//const elements = "Denea", "Ransom"

const copiedFullName = [...fullName];
console.log(copiedFullName);

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));

const persons = [{name: "Denea", age: 26}, {name: "Reyna", age: 1}];
const copiedPersons = [...persons];

persons.push({name: "Zeus", age: 3 });
copiedPersons[0].name = "Greg"
persons[0].name = "Erik";
console.log(persons, copiedPersons);

let x = 10;
let y = "abc";

let a = x;
let b = y;

//our variable of a takes on the value of what x was, but the two variables are not related.

console.log(x, y, a, b);

let arr = [];
arr.push(1);

let reference = [1];
let refCopy = reference;

reference.push(2);
console.log(reference, refCopy);