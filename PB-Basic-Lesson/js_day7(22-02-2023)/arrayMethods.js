const toDoList = ["coding", "laundry", "cook", "watch tv"];

// add a new Item to the beginning of the array. array.unshift()
// Returns the length of the new array

let returnFromUnshift = toDoList.unshift("call the doctor");

// console.log(returnFromUnshift) // 5
console.log(toDoList); // [ 'call the doctor', 'coding', 'laundry', 'cook', 'watch tv' ]

// add a new Item to the end of the array. array.push()
// Returns the length of the new array

let returnFromPush = toDoList.push("call my friend Mike");

console.log(toDoList); // ['call the doctor','coding','laundry','cook','watch tv','call my friend Mike']
// console.log(returnFromPush) // 6

// Remove items from the Array

// remove an Item from the beginning of the array. array.shift()
// Returns the removed Item

let returnFromShift = toDoList.shift();

console.log(toDoList); // [ 'coding', 'laundry', 'cook', 'watch tv', 'call my friend Mike' ]
console.log(returnFromShift); // call the doctor

// remove an Item from the end of the array. array.pop()
// Returns the removed Item

let returnFromPop = toDoList.pop();

console.log(toDoList); // [ 'coding', 'laundry', 'cook', 'watch tv' ]
console.log(returnFromPop); // call my friend Mike

const letters = ["a", "b", "c", "e", "f"];

// The splice method can add or remove items from a specific position inside the array
// array.splice(startIndex, deleteCount , insertNewItem )

letters.splice(3, 0, "d"); // this will add "d" in index 3

console.log(letters); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

letters.splice(1, 1, "bi"); // this will reassign "b" to "bi"

console.log(letters); // [ 'a', 'bi', 'c', 'd', 'e', 'f' ]

letters.splice(1, 1); // this will remove "bi" from the array. When I only want to remove the third argument is not necessary

console.log(letters); // [ 'a','c', 'd', 'e', 'f' ]

// The slice method will extract a section of elements from an array. Slice will not modify the original array
// array.slice(startIndex, endIndex)  => startIndex is included / endIndex is not included

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let weekend = week.slice(5); // when I want to extract till the end of the array I use only the startIndex

console.log(weekend); // [ 'Saturday', 'Sunday' ]
// console.log(week)

let vassilisTeaching = week.slice(2, 4);

console.log(vassilisTeaching); // [ 'Wednesday', 'Thursday' ]

// The reverse method will reverse the order of the elements inside the array. It modifies the original array and returns the reversed one.

week.reverse();

console.log(week); /*  [
    'Sunday',
    'Saturday',
    'Friday',
    'Thursday',
    'Wednesday',
    'Tuesday',
    'Monday'
  ] */

// Split and Join
// string.split(separator) => String to array
// array.join(separator) => Array to string

const sentence = "Hello nice to meet you";

const myArray = sentence.split(" "); // turn the string into an array separated by " " (space)

myArray[1] = myArray[1].toUpperCase(); // modify the second item of the array to uppercase

console.log(myArray[1]); // NICE

console.log(myArray); // [ 'Hello', 'NICE', 'to', 'meet', 'you' ]

const modifiedString = myArray.join(" "); // will turn the array into a string separated by " " space

console.log(modifiedString); // Hello NICE to meet you

// The concat method will merge two or more arrays together. The original arrays are not gonna be modified

const arrayOne = [132, 245, 657];
const arrayTwo = [32, 960, 405];

const arraysTogether = arrayOne.concat(arrayTwo);

console.log(arraysTogether); // [ 132, 245, 657, 32, 960, 405 ]

const newArrayFromOne = arrayOne.concat(345, 344, 222, 556, 773, 735);

console.log(newArrayFromOne);
