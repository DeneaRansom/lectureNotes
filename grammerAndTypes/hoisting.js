/**
-First pass: stores our variable declarations, but does not assign values. 
Anything that needs hoisted is hoisted here.
-second pass: assigns the value to our variable and executes any hoisted source code. 
 */

//console.log(myName);
//let myName = "Denea";

b();

function b() {
    console.log("I have been hoisted!");
}