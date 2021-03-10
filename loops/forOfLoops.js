/**
 *-For of loops and for in loops bith do the same thing which is loop over data structure.
 There is one key difference, what they iterate over.
        -for in loops iterate over the enumerable properties in an object
        -for of loops iterate over the values of an terable object
 */

let catArray = ["tabby", "british shorthair", "burmese", "Maine coon", "rag doll"]; 

for (cat of catArray) {
    console.log(cat);
}
//Cannot use for of loops on objects without indicies
let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (stud of student) {
    console.log(stud);
}

//forIn best for objects
//forOf loops best for arrays