/**
 -Loops offer us a quick and easy way to do something repeatedly, or loops over something.
 -There are many kinds of loops, but they all roughly do the same thing.
    -It will repeat until a specified condition evaluates to true
        -for statement
        -do while statement
        -while statement
        -labeled statement
        -break statement
        -for in statement
        -for of statement
Note: there is a danger of infinite loops. There are three main parts to a loop:
        -initial expression
        -condition
        -increment expression        
 */


//let i = 7;

for (i = 0; i < 10; i++) {
    //console.log(i)
}



for (i = 0; i <= 20; i += 20) {
    //console.log(i);
}

for (i = 10; i >= 0; i -= 1) {
    //console.log(i);
}

for (let i = 0; i >= -24; i -= 2) {
    //console.log(i);
}

let dname = "Kenn";
let count = dname.length;

for (let l = 0; 1 < count; l++) {
    //console.log(dname[1]);
}