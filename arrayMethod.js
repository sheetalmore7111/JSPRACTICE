let foodItems = ["apple", "pizza", "mango", "banana"];

// foodItems.push("burger", "cherry"); add new item in end of list
// foodItems.pop(); delete last item from array
// deletedItem = foodItems.pop(); and also display the deleted item from array

// console.log(foodItems.toString()); toString convert array into string

// console.log(deletedItem);

let nonVegitems = ["chiken", "biryani", "mutton", "fish"];

let newList = foodItems.concat(nonVegitems); // concat join 2 diff array together.

// console.log(newList.slice(2, 4)); // slice gives a pice of list form the array.

foodItems.splice(1, 0, "pavbhaji");
console.log(foodItems);

// Reduce Method:

const numbers = [1, 200, 3, 4, 5, 98];
const sumWithreduce = numbers.reduce((prev, curr) => {
  //   return prev + curr; // add the all numbers from array.
  return prev > curr ? prev : curr; // find the maximum number from the array.
});

// console.log("Sum with Reduce Method: ", sumWithreduce);
console.log("Largest Number is : ", sumWithreduce);
