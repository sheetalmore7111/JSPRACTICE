// Print all Even number from 0 to 100

// for (let i = 0; i <= 100; i = i + 2) {
//   console.log("i =", i);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log("i =", i);
//   }
// }

//-----------------------------------------------------------

// geuess correct number from user
let gameNum = 10;

let userNum = prompt("Guess the Number");

while (userNum != gameNum) {
  userNum = prompt("you guess wrong Number Guess Aagain");
}

console.log("congratulations you guess write number");
