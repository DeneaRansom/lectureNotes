//let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

//regular for loop

//for (let i = 0; i < food.length; i++) {
    //console.log(food[i]);
//}

//food.forEach(foodItem => console.log(foodItem));

//the forEach method CANNOT return a value

//food.forEach((foodItem, index) => console.log(foodItem, index));



let movies = ["Dreamgirls", "Spiderman", "EndGame", "Project X"]

movies.forEach(movieTitle => console.log(movieTitle)) 
movies.push("The Polar Express")
console.log(movies);

let moviesSplice = movies.splice(1, 1, "Into the Woods");
console.log(moviesSplice);
console.log(movies);


