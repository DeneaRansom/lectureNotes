//Constructor Functions
//***********
//-Constructor functions can be thought of as a reusable skeleton object
//-We can add to the constructor functions the same way we add objects -dot notation
//- It is good practice to capitalize your constructor functions

//OPTION 1

let artist1 = {
    name: "Queen",
    albums: 15,
    allMembersAlive: false,
}

let artist2 = {
    name: "Fleetwood Mac",
    albums: 18,
    allMembersAlive: false,
} 
let artist3 = {
    name: "Stevie Wonder",
    albums: 11,
    allMembersAlive: true,
}
//(1)      (2)         (3)
//function name      parameters
function Artist(name, albums, allMembersAlive) {
   //(4) (5)     (6)
    this.name = name
    this.albums = albums
    this.allMembersAlive = allMembersAlive
}
//            (7)  (8)
let artist = new Artist("Lizzo", 3, true)
console.log(artist);

//1. Function keyword
//2. CAPITALIZED function name
//3. The Parameters : These will be the values of the objects once this function is in use
//4. The "this" keyword. "This" gives us the ability to refer back to whatever called/actives it. 
///////(In this case "this" referred to our Artist)
//5. The key of our new object that is being created 
//6. Is referring back to the parameter that is being passed to the function
//7&8. The new keyword calling our Artist function, creating a new 'Artist' with values passed in as parameter.


function Car(make, model, miles, hasBeenCrashed) {
    this.make = make;
    this.model = model;
    this.miles = miles;
    this.hasBeenCrashed = hasBeenCrashed;
}
let car = new Car('Honda', 'Accord', 200000, true)
console.log(car);