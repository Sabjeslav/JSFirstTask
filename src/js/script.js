const firstNum = +prompt("Enter first number:");
const secondNum = +prompt("Enter second num:");
const num = +prompt("Enter number to check:");

//task 1
/**
 * Finds maximal value of two numbers
 * @param {number} val1 - first number to compare
 * @param {number} val2 - second number to compare
 * @returns {number} - bigger number of 2 arguments
 */
const maxValue = function (val1, val2) {
  if (isNaN(val1 - val2)) return null;
  if (val1 > val2) return val1;
  return val2;
};

//task 2
/**
 * Finds minimal value of two numbers
 * @param {number} val1 - first number to compare
 * @param {number} val2 - second number to compare
 * @returns {number} - less number of 2 arguments
 */
const minValue = function (val1, val2) {
  if (isNaN(val1 - val2)) return null;
  if (val1 < val2) return val1;
  return val2;
};

//task 3
/**
 * Checks if number is even
 * @param {number} number - number to check
 * @returns {boolean} - true if number is even, false if number is odd
 */
const checkParity = function (number) {
  return (number % 2 === 0);
};

/**
 * Debug function for writing results into console
 */
function checkAnswers() {
  console.log("Max value is: ", maxValue(firstNum, secondNum));
  console.log("Min value is: ", minValue(firstNum, secondNum));
  if (checkParity(num)) console.log(`${num} is even`)
  else console.log(`${num} is odd`);
}

checkAnswers();

const A = +prompt("Enter a:");
const B = +prompt("Enter b:");
const C = +prompt("Enter c:");

/**
 * Quadratic equation solve function
 * @param {number} a - A coefficient of equation
 * @param {number} b - B coefficient of equation
 * @param {number} c - C coefficient of equation
 * @returns {null | [number, number]} - null if discriminant === 0, array for x1, x2 values
 */
const quadratic = function (a, b, c) {
  if (isNaN(a-b-c)) {
    console.error('Numbers are incorrect! Please check carefully input data');
    return null;
  }
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
