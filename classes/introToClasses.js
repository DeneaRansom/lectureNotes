/**
-JavaScript classes were introduced in ES5, as a new way to write JS's previous prototype-based inheritence, which is a way of creating an object that acts as a blueprint.

-Classes act a blueprint for creating objects that share methods and properties. 

-Classes consist of the class name, curly braces, and any properties or methods we include within the curly braces.

-Classes can be written as class expressions or class declarations

-class declarations do not get hoisted
class Automobile {
    //mathods and properties go here
}

let vehichle = class {
  //methods and properties go here
}

-the constructor method is a special method that helps create and initialize an object created from a class. it works in tandem with the new keyword.

-the constructor needs to be included for us to created new objects ir instances of our class. This allows us to set up properties as well as pass in values for those properties when creating the new instance.

-Each class can only have ONE constructor
 */
/**
          (1)
 class Cookie {

                          (2)
     constructor(type, icing, shape){
         (3)      (4)
        this.t = type;
        this.i = icing;
        this.s = shape;
     }
 }

 1. We have a class of Cookie
 2. The constructor method takes in three parameters of type, icing, and shape. Since the constructor method is invoked when we call upon the class, we need to supply the arguments.
 3. We are assigning keys/properties for each new instance of our Cookie class.
 4. We are assigning those keys/properties the values that we pass in as arguments.
 */

class Cookie {
constructor(type, icing, shape){
this.t = type;
this.i = icing;
this.s = shape;
}
}

let chocChip = new Cookie("chocolate chip", false, "circle");
console.log(chocChip);
/*
class Automobile {
    start() {
        console.log("Hello");
    }

    stop() {
     console.log("Bye");
    }
}

let newCar = new Automobile();
console.log(newCar);
newCar.start()
*/

class Automobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    } 

    start() {
        console.log(`The ${this.make} ${this.model}'s engine started`)
    }

    stop() {
        console.log(`The ${this.make} ${this.model}'s engine stopped`)
    }
}
let honda = new Automobile("Honda", "Civic")
console.log(honda);
honda.start();
honda.stop();


/**
-The extends keyword is used in class declarations/expressions to create a new class as a child of another class.

-Each new class we ceater that extends from the parent class not only inherits the properties and methods from the parent class, but it also can have its own methods and properties.
 */

 //Parent
 class Animal {
     constructor(name){
      this.name = name;
     }

     eat(){
         console.log(`${this.name} eats their food`);
     }
 }

 //Subclass 
//The super method gives  us acess to the parent classes properties and methods 
 class Dog extends Animal {
     constructor(name, breed){
         super(name);
         this.breed = breed;
     }

     play (){
         console.log(`${this.name} fetches the ball!`)
     }
 }
let Georgie = new Dog("Georgie", "German Shepard")
Georgie.eat();
Georgie.play();
 