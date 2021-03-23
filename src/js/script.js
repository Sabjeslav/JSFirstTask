// let a = 5,
//   b = 3,
//   c = 24,
//   d = 8,
//   e = 3,
//   f = 4;

// console.log(a + b);
// console.log(c / d);
// console.log(e + f);

// const var1 = 11,
//   var2 = true,
//   var3 = "JavaScript",
//   var4 = "100";

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);

// console.log( Math.pow(5, 2) );

// let num = 1;
// num += 11;
// num -= 11;
// num *= 11;
// num /= 11;
// num++;
// num--;

// const input1 = prompt('Enter first number:');
// const input2 = prompt('Enter second number:');

// const myFunc = function (val1, val2) {
//   const result = Number(val1) + Number(val2);
//   return (isNaN(result) ? null : result);
// };

// const sum = myFunc(input1, input2);
// console.log(sum);

const firstNum = +prompt("Enter first number:");
const secondNum = +prompt("Enter second num:");
const num = +prompt('Enter number to check:');
let msg = "Numbers are equal";

//task 1
const maxValue = function (val1, val2) {
  if ( isNaN(val1) || isNaN(val2) ) return console.log("Error! Enter correct number");
  if (val1 === val2) return msg;
  if (val1 > val2) return val1
  else return val2;
};

//task 2
const minValue = function (val1, val2) {
  if (isNaN(val1) || isNaN(val2)) return console.log("Error! Enter correct number");
  if (val1 === val2) return msg;
  if (val1 < val2) return val1
  else return val2;
};

//task 3
const checkParity = function (number) {
  if (number % 2 === 0) return true
  else return false;
}

function checkAnswers () {
  console.log("Max value is: ", maxValue(firstNum, secondNum));
  console.log("Min value is: ", minValue(firstNum, secondNum));
  if (checkParity(num)) console.log(`${num} is even`)
  else console.log(`${num} is odd`);
}

checkAnswers();
checkParity();
