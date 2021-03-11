/**
 -Function parameters are place holders for data that we pass into the function when invoking the function
                (1)
    funtion hi(name) {
        console.log(`Hi ${name}`)
                           (3)
    }
          (3)
    hi("Denea");

    1. The parameter(s) that the function is accepting or holding
    2. Using string interpolation, we can refer to the parameter given to the funtion
    3. This is where we define what the parameter's value will be
 */

 function Denea(ticketOne, ticketTwo) {
     console.log(`I exchanged my ticket for a ${ticketOne} ${ticketTwo}`);
 }
 Denea("cheese pizza", " & coke");

 function hey(nameOne, nameTwo) {
    let yourName = "";
    yourName += nameOne + "" + nameTwo;
    console.log("Hello, my name is " + yourName); 
    
 }
 hey("Denea", "Ransom");