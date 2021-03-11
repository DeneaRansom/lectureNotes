/**
 
let hi = () => {
       (1)
    return "Hi"
}
        (2)    (3)
 let newName = hi()

 console.log(newName)

 1. The keyword that brings our data out of our funtion
 2. We need a new variable to hold the value of the return
 3. When called, the function become the value of the return
*/

let myName = dname => {
    return dname;
}
let newName = myName("Denea");
console.log(newName);

function capitalizeName(name) {
    let capName = "";
    for (let l in name) {
        if(l == 0){
            capName += name[1].toUpperCase();
        } else {
            capName += name[1].toLowerCase();
        }
    } 
    //console.log(capName)
    return capName
    } 
let finishedName = capitalizeName("dENea")
console.log(finishedName);


let check = 50;
let tipAmt = priceBeforeTip => {
    let tip = priceBeforeTip * .15;
    return tip;
}
let tip = tipAmt(check);
console.log(`Your meal cost$${check}, you should tip $${tip}`);