const firstNum = +prompt("Enter first number:");
const secondNum = +prompt("Enter second num:");
const num = +prompt("Enter number to check:");
let msg = "Numbers are equal";

//task 1
const maxValue = function (val1, val2) {
  if (isNaN(val1) || isNaN(val2))
    return console.log("Error! Enter correct number");
  if (val1 === val2) return msg;
  if (val1 > val2) return val1;
  else return val2;
};

//task 2
const minValue = function (val1, val2) {
  if (isNaN(val1) || isNaN(val2))
    return console.log("Error! Enter correct number");
  if (val1 === val2) return msg;
  if (val1 < val2) return val1;
  else return val2;
};

//task 3
const checkParity = function (number) {
  if (number % 2 === 0) return true;
  else return false;
};

function checkAnswers() {
  console.log("Max value is: ", maxValue(firstNum, secondNum));
  console.log("Min value is: ", minValue(firstNum, secondNum));
  if (checkParity(num)) console.log(`${num} is even`);
  else console.log(`${num} is odd`);
}

checkAnswers();
checkParity();


const A = +prompt("Enter a:");
const B = +prompt("Enter b:");
const C = +prompt("Enter c:");

const quadratic = function (a, b, c) {
  const D = b ** 2 - 4 * a * c;
  console.log("Discriminant: ", D);
  if (D < 0) return console.log("Discriminant is less than 0!");
  else {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    if (D === 0) return x1;
    if (D > 0) return [x1, x2];
  }
};

console.log(quadratic(A, B, C));
