let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (foodItem of food) {
    console.log(foodItem);
}

food.push("Pizza");
console.log("push:", food);

let foodSplice = food.splice(1, 2,"Banana");
//1st number is where to start counting, 2nd number is how many numbers to delete, 3rd number is what to replace it with.                                
console.log(foodSplice);
console.log(food);

let foodPop = food.pop();
console.log(foodPop);
console.log("Pop", food);

let foodShift = food.shift();
console.log(foodShift);
console.log("Shift", food);


let foodUnshift = food.unshift();
console.log(foodUnshift);
console.log("Unshift", food);

