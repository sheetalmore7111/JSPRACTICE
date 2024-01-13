// 1)  get input from user and check the number is multiple of 5 or not:

// let num = prompt("Enter a Number");
// console.log("Number = ", num);

// if (num % 5 === 0) {
//   console.log(num, "is multiple of 5");
// } else {
//   console.log(num, "is not multiple of 5");
// }

// 2) ---------------------------------------------------------------------------------
// write a code can gives grade to students according to following marks:

// 80 - 100 = A
// 70 - 79 = B
// 60 - 69 = C
// 50 - 59 = D
//  0 - 49 = F
// let marks = 80;

// if (marks >= 80) {
//   console.log("A Grade");
// } else if (marks >= 70) {
//   console.log("B Grade");
// } else if (marks >= 60) {
//   console.log("C Grade");
// } else if (marks >= 50) {
//   console.log("D Grade");
// } else {
//   console.log("Fail");
// }

// 3) -------------------------------------------------------------
// Prompt the user to enter there username generate username for based on them input
// username start with @, follwed by there full name end with the fullname length
// e.g username = sheetalmore  , username should be = @sheetalmore11.

// let fullName = prompt("Enter your Full Name");
// console.log(fullName);

// let userName = `@${fullName.concat(fullName.length)}`;
// console.log(userName);

//----------------------------------------------------------------------

// 4) for given array with a marks of student = [85,97,44,37,76,60] find the average marks.

// let makrs = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let i = 0; i < makrs.length; i++) {
//   sum = sum + makrs[i];
// }

// let average = sum / 6;
// console.log("Total Marks =", sum);
// console.log("Average =", average);

// Second way with for of loop:

// let num = [5, 6, 8, 4, 2];

// let add = 0;

// for (let value of num) {
//   add = add + value;
// }

// let avg = add / 5;

// console.log("Addition =", add);
// console.log("average =", avg);

// 5) ------------------------------------------------------------
// check is there any even or odd numbmers are there in array.
// let num = [5, 7, 5, 3, 1];

// for (let value of num) {
//   if (value % 2 === 0) {
//     console.log("there is even numbe in this array");
//   } else {
//     console.log("there is odd number in this array");
//   }
// }

// 6) ---------------------------------------------------------------------

// for a given array with prices of 5 items = [250,300,650,500] all items have offer
// that 10% off on them. change the array to store final price after applying the offer.

// let prices = [250, 300, 650, 500];

// for (let i = 0; i < prices.length; i++) {
//   let offer = prices[i] / 10;
//   //   prices[i] -= offer; this is shorthand method of line no 97
//   prices[i] = prices[i] - offer;
// }
// console.log(prices);

// 7) --------------------------------------------------------------------------------
// Create an array to store companies = ["bloomberg", "Microsoft", "Uber", "Google" ,"IBM","Netflix"]

//a. remove first company form an array:
// let companies = ["bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);

// b.Remove Uber and add Ola in its place.

// companies.splice(2, 1, "Ola");
// console.log(companies);

// c. Add Amazon at the end

// companies.push("Amazon");
// console.log(companies);

// 8) ----------------------------------------------------------------
// create a function take a string as an argument and return number of vowels in the string

// this is simple function for above example
// function countVowels(str) {
//   let count = 0;

//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log("No of Vowels : ", count);
// }

// countVowels("sheetal more");

// arrow function performing same task.

// const vowels = (text) => {
//   let count = 0;
//   for (let txt of text) {
//     if (
//       txt === "a" ||
//       txt === "e" ||
//       txt === "i" ||
//       txt === "o" ||
//       txt === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log("Count of Vowels : ", count);
// };

// vowels("sam");
//9) ---------------------------------------------------------------------------------
// Find the square of given array
// let arry = [5, 64, 8, 7, 6];

// arry.forEach(function fun(value) {
//   console.log(value * value);
// });

//10) ------------------------------------------------------------------------------
// find the even numbers from the given array and make store that numbers in new array

// let numbers = [5, 6, 2, 4, 3, 7];
// console.log(numbers);

// let newArray = numbers.filter((evn) => {
//   return evn % 2 == 0;
// });

// console.log(newArray);

// 11) -----------------------------------------------------------------------------------
// filter age from an array of an object
// let emp = [
//   {
//     name: "pooja",
//     age: 29,
//   },
//   {
//     name: "sheetal",
//     age: 20,
//   },
// ];

// let findAge = emp.filter((employee) => {
//   return employee.age > 25;
// });

// console.log(findAge);

// 12) ---------------------------------------------------------------
// We are given array of marks of student. filter out of marks of student that score
// 90+ marks.

// let stdMarks = [87, 98, 47, 99, 84, 17, 91];

// let marksFilter = stdMarks.filter((mark) => {
//   return mark > 90;
// });

// console.log("All Marks Arrar : ", stdMarks);
// console.log("90+ Marks Array : ", marksFilter);

// 13) -----------------------------------------------------------------
// Take a number n as input from user. create an array of numners from 1 to n.
// Use Reduce Method to find sum of all numbers in array.
// Use Reduce Method to find product of all numbers in array.

let n = prompt("Enter a Number");

let arry = [];

for (let i = 1; i <= n; i++) {
  arry[i - 1] = i;
}

console.log(arry);

let sumArray = arry.reduce((prev, current) => {
  // return prev + current; // this will find sum of numbers from array
  return prev * current; // this will find Product of numbers from array.
});

// console.log("Sum of Numbers from Array =", sumArray);
console.log("Product of Numbers from Array =", sumArray);
