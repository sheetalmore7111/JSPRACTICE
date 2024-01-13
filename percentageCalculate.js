let value1 = prompt("Enter Number -1 ");
console.log("Number 1 =", value1);
let value2 = prompt("Enter Number -2 ");
console.log("Number 2 =", value2);

function percentage() {
  let minus = value1 - value2;
  console.log("Number 1 - Number 2 =", minus);
  let percent = (value2 / value1) * 100;
  console.log("Percentage = ", percent);
}

percentage();
