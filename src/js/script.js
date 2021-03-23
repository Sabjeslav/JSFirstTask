const firstNum = +prompt("Enter first number:");
const secondNum = +prompt("Enter second num:");
const num = +prompt("Enter number to check:");

//task 1
const maxValue = function (val1, val2) {
  if (isNaN(val1 - val2)) return null;
  if (val1 > val2) return val1;
  return val2;
};

//task 2
const minValue = function (val1, val2) {
  if (isNaN(val1 - val2)) return null;
  if (val1 < val2) return val1;
  return val2;
};

//task 3
const checkParity = function (number) {
  return (number % 2 === 0);
};

function checkAnswers() {
  console.log("Max value is: ", maxValue(firstNum, secondNum));
  console.log("Min value is: ", minValue(firstNum, secondNum));
  if (checkParity(num)) console.log(`${num} is even`);
  else console.log(`${num} is odd`);
}

checkAnswers();

const A = +prompt("Enter a:");
const B = +prompt("Enter b:");
const C = +prompt("Enter c:");

const quadratic = function (a, b, c) {
  const D = b ** 2 - 4 * a * c;
  console.log("Discriminant: ", D);
  if (D < 0) return null;
  if (D === 0) {
    const x = -b / (2 * a);
    return [x, x];
  }
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);
  return [x1, x2];
};

console.log(quadratic(A, B, C));
