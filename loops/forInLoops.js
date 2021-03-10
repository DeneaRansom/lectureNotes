/**
-For in loops are great for iterating over values in an object.
Properties in objects are what's called enumerable

-for in loops iterate over an object's enumberable properties
 */

 let student = {
     name: "Peter",
     awesome: true,
     degree: "JavaScript",
     week: 1
 }
for (item in student) {
    console.log(item);
    console.log(student[item]);
} 

let catArray = ["tabby", "british shorthair", "burmese", "Maine coon", "rag doll"];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}
    
let ename = "erik";
let capName;
for ( let l in ename) {
    if (l == 0) {
        capName = ename[l].toUpperCase();
        } else {
            capName += ename[l].toLowerCase();
        }
}
console.log(capName);
