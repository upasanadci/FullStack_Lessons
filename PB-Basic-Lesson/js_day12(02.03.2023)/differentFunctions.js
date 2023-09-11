// What are the different ways to write a function;

// Function declaration
function greetings(name) {
  return `Hello ${name}`;
}

console.log(greetings("world"));

// Function expression
// we declare a variable and save the function inside. This function is called anonymous function
const greetingsExpression = function (name) {
  return `Hello ${name}`;
};

console.log(greetingsExpression("world"));

// Arrow function expression
const greetingArrow = (name) => {
  return `Hello ${name}`;
};

console.log(greetingArrow("world"));

// write an arrow function that sums up two numbers

// const sum = (a, b) => {
//   return a + b;
// };

// If the function has only one line of code inside I can write it like this

const sum = (a, b) => a + b;

console.log(sum(4, 8));

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("this code runs Immediately and it says Hi!!!");
})();

// IIFE with arrow function
(() => {
  console.log("inside the arrow");
})();

(() => {
  console.log(new Date());
})();

