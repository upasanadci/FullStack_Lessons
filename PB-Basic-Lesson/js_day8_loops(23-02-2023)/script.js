// Loops in Javascript

// The for loop. A loop will repeat a block of code multiple times till a certain condition is full filled

// how a for loop looks like

// for (initialization; condition; increment/decrement) {
//    code to be executed
// }

// create a loop that prints the word "Hello" 5 times

for (let i = 0; i < 5; i++) {
  // 1st time i = 0 ; i<5 => true => code will be executed; i = 0 + 1 => 1
  console.log("Hello"); // 2nd time i = 1 ; i<5 => true => code will be executed; i = 1 + 1 => 2
} //  ... ........ ....
//  5th time i= 5 ; i<5 => false => loop will terminate

// create a program that prints all numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
  // 1,2,3,4,5
  // console.log(i);
}

// create a program that prints all numbers from 5 to 1

for (let i = 5; i >= 1; i--) {
  // console.log(i);
}

// create a program that prints 5 different random numbers. Each number will be between 1 and 10

for (let i = 1; i <= 5; i++) {
  let randomNum = Math.floor(Math.random() * 10 + 1);

  //   if (randomNum > 5) {
  //     console.log(randomNum);
  //   } else {
  //     console.log("sorry");
  //   }
}

//make a program that prints the numbers from 10 to 100 incremented every time by 10.

for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}

let string = ""; // "AAAAAaaaaa"

for (let i = 0; i < 10; i++) {
  if (i >= 5) {
    string = string + "a";
  } else {
    string += "A";
  }

  // console.log(string);
  /*
     A
     AA
     AAA
     AAAA
     AAAAA
     AAAAAa
     AAAAAaa
     AAAAAaaa
     AAAAAaaaa
     AAAAAaaaaa */
}

console.log(string); // "AAAAAAAAAA"

// Create a program that will sum up all the numbers between 1 and 5

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum = sum + i;

  //   sum += i;
  //   console.log(sum);
}
// sum = 0; i = 1 => sum =0 + 1
// sum = 1; i = 2 => sum = 1+ 2
// sum = 3; i = 3 => sum = 3+3
// sum = 6; i= 4 => sum = 6+4
// sum = 10; i=5 => sum = 10+5

console.log(sum);

// Create a program that will sum up all numbers from an array.

const array = [2, 4, 6, 1, 4, 7];

let sumArray = 0;

// loop through the array

for (let i = 0; i < array.length; i++) {
  // if array.length = 6 the loop will run 6 times from i=0 to i=5
  console.log(array[i]);

  sumArray += array[i];
}

console.log("sum of the array:", sumArray); // 24

// Create a program that loops through an array of numbers and adds 2 in every number

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] + 2;
}

console.log(numbers); // [ 3, 4, 5, 6, 7 ]

// Create a program that creates an array with the numbers between 1 and 5

const myArray = [];

for (let i = 1; i <= 5; i++) {
    myArray.push(i)
}

console.log(myArray) // [ 1, 2, 3, 4, 5 ]