/**
 

    funtion hi () {
        console.log("HI");
    }
    (1)
    hi()

   1. This is where we call "invoke" or funtion 

   Cris Matson- "writing hte function body is like buying a VHS tape,
                     but you cna't watch it unless you play() it"
 */

 //function hi() {
     //console.log("HI");
/////}

 //hi;
 //hi(); //this is the correct way to invoke a function 
 //console.log(hi);
 //console.log(hi()); 

 /**WRONG WAY
 function count(i = 0; i >= 10; i++) {
     console.log(i);
 }
 count();
 */


//Correct way 
 function count() {
     for (let x = 1; x<= 10; x++){
         console.log(x);
     } 
 }
 count();

 let arr = ['This', 'is', 'really', 'cool'];

 function cool() {
     for (word of arr){
         console.log(word);
     }
     
 }
 cool();