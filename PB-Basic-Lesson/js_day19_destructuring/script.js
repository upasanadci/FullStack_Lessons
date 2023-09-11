// Clones and references

// clone example
let x = 10;
let y = x; // creating a clone from x
y += 20;
console.log(y); // 30
console.log(x); // 10 => x is keep it's value because when I copy simple values I get it in clones

// objects and arrays are creating references

let obj1 = { a: 1, b: 2 };
let obj2 = obj1;
obj2.c = 3; // when I change obj2 obj1 will change as well
console.log(obj1); // { a: 1, b: 2, c: 3 }
console.log(obj2); // { a: 1, b: 2, c: 3 }

// using the spread operator to copy an object

let objectOne = { num1: 1, num2: 2, num3: 3 };
let objectTwo = { ...objectOne };

// Addition Info
// the spread operator creates a shallow copy of an object or an array , if we have nested objects or arrays , those are still gonna be references. In the future we will learn how to create deep copies

objectTwo.num4 = 4;
console.log(objectTwo); // { num1: 1, num2: 2, num3: 3, num4: 4 }
console.log(objectOne); // { num1: 1, num2: 2, num3: 3 }

// create a copy of an array with the spread operator

const arrayOne = [12, 23, 34];
const arrayTwo = [...arrayOne];

arrayTwo.push(45);

console.log(arrayOne); // [ 12, 23, 34 ]
console.log(arrayTwo); // [ 12, 23, 34, 45 ]
console.log(...arrayTwo); // 12 23 34 45

// instead of push I can use the spread operator for adding new elements in the array

const newArray = [...arrayTwo, 56];

// concatenating to arrays with spread operator
const arrayToBeAdded = [98, 87, 76, 65];

console.log(newArray);

const concatArray = [...newArray, ...arrayToBeAdded];
console.log(concatArray);

// concatenate 2 objects together
const mainInfo = { firstName: "John", lastName: "Doe" };
const additionalInfo = { city: "Berlin", email: "john@gmail.com" };

const usersInfo = { ...mainInfo, ...additionalInfo };

console.log(usersInfo);

// add additional properties

const developerData = {
  city: "Berlin",
  occupation: "software Developer",
  employmentStatus: "contract",
};

const johnData = {
  ...developerData,
//   ...usersInfo, // we can also concatenate 
  firstName: "John",
  lastName: "Smith",
};

console.log(johnData);


// Maria Smith data

const mariaData = {
    ...developerData,
    firstName : "Maria",
    lastName: "Smith"
}

console.log(mariaData)



