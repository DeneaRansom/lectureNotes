//Functions expression are functions stored within variables
//Funtion expressions DO NOT get hoisted

/**
  (1)
 let hey = funtion hi() {
     console.log("HI!");
 }

 1. The variable hey is now representative of the funtion hi()
 */




let hey = function () {
    console.log("HI!");
}  
hey()
