/**
-Object bracket notation can also allow us to find a value in an object
-Using object bracket notation can be handy if we want to store a key and then use that variable to parse through an object
-This works because all keys in an object are strings
 */

 let garden = {
     vegtable: "zucchini",
     flower: "sunflower",
     fruit: "grape",
     water: true,
     sun: true,
     size: 12
 }

 let test = Object.keys(garden);
 console.log(test)
 console.log(typeof test[0]);

 console.log(garden.vegtable);
 console.log(garden["vegtable"]);

let baking = {};
baking ["zucchini"] = "better make some bread";





let favoriteMovie = {
    nameOfMovie: "DreamGirls",
    runTime: 131,
    genre: "Musical",
    characters: [
    {
        name: "Deena",
        age: 25,
        item: ["red"]
    },
    {
        name: "Lorrell",
        age: 28,
        item: ["orange"]
    }
    
    ]
}

//console.log(favoriteMovie)

//console.log(favoriteMovie);
//console.log(favoriteMovie["character"])
console.log(favoriteMovie.nameOfMovie, favoriteMovie.runTime)
console.log(favoriteMovie.characters[0].name, favoriteMovie.characters[0].item[0]);

