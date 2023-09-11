// The scope in Javascript

// Global scope belong variables that are accessible in every part of the code

// local scope  function scope belong variables that are accessible only in a specific block of code

// The scope of the parameters in a function is local

function sum(x, y) {
  console.log("value of x", x);
  console.log("value of y", y);
  console.log(x + y);
}

sum(5, 7);

//  console.log("value of x", x); //  ReferenceError: x is not defined
// console.log("value of y", y); // ReferenceError: y is not defined

// the scope of the variables being declared inside a function is local

function AddNumber(x) {
  console.log("value of x", x);
  let result = x + 5;
  console.log("the value of the result", result); // the value of the result 17
  return result;
}

AddNumber(12);
// console.log("the value of the result", result); // ReferenceError: result is not defined

// When a variable is been declared outside of a function it has global scope

let num = 10;

function displayNum() {
  console.log("inside the function", num); // inside the function 10
}

displayNum();
console.log("outside of the function", num); // outside of the function 10

function addToNum(x) {
  return num + x;
}

console.log(addToNum(5)); // 15

let count = 0;

function incrementCount() {
  count++;
  console.log(
    "this is the value of count every time I call the function",
    count
  );
}

incrementCount();
incrementCount();
incrementCount();

console.log("This is the final count", count); //This is the final count 3

// create a function that increases the speed of a vehicle

let speed = 0;
// console.log("I am declaring the speed");

function increaseSpeed(newSpeed) {
  //   console.log("I use the speed inside the function");
  speed += newSpeed;
}

increaseSpeed(10);
increaseSpeed(30);
increaseSpeed(14);
increaseSpeed(23);
increaseSpeed(-23);

console.log("this is your speed right now", speed); // this is your speed right now 54

function checkSpeed() {
  console.log(speed); // 54
  if (speed > 50) {
    console.log("call the cops");
  } else {
    console.log("Don't call anybody");
  }
}

checkSpeed();

function newFunction() {
  let speed = 12; // this speed exist only inside the function
  console.log("Speed inside the function", speed); //Speed inside the function 12
}

newFunction();
console.log(speed); //54 => here the value will come from the global variable that we declared in line 67

// example local scope
// create a function that return 5 different numbers from 0 to 50 every time I call it

function randomNumbers() {
  let result = [];
  for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 50);
    result.push(randomNum);
  }
  return result;
}

console.log(randomNumbers());

// create a program that sums up all the sales of a day from a clothing store.

let totalAmount = 0;

function newSale(amount) {
  totalAmount = totalAmount + amount;
  console.log("the new amount is added. your total amount is", totalAmount);
}

newSale(25);
newSale(35);
newSale(60);

console.log("At the end of all sales the amount is", totalAmount); // At the end of all sales the amount is 120


// If we assign a value to a variable that is not already declared, it will automatically become a GLOBAL variable.

function greet(name) {
  console.log(name);
  greeting = `Hello,${name}`; // I am not declaring the variable
  return greeting;
}


console.log(greet("Riccardo"));

console.log(greeting); // I have access to it outside the function 
