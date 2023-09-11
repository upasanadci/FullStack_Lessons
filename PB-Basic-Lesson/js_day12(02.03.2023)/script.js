// The return inside the function

function sum(a, b) {
  let result = a + b;
  return result;
}

// console.log(sum(5, 3));
let firstCalc = sum(5, 3);

console.log(firstCalc); // 8

// console.log(sum(5, 8));

let secondCalc = sum(5, 8);// 13
console.log(secondCalc);

////////////////////////////////
// create a program that compares the length of two names anf prints the biggest one

let name1 = "Netta";
let name2 = "Elena";

function nameLength(name) {
  return name.length;
}

lengthOfName1 = nameLength(name1);
lengthOfName2 = nameLength(name2);

function compareLengths(lengthA, lengthB) {
  if (lengthA > lengthB) {
    return "Name1 is bigger";
  } else if (lengthB > lengthA) {
    return "Name2 is bigger";
  } else {
    return "Name1 and Name2 are equal";
  }
}

let result = compareLengths(lengthOfName1, lengthOfName2);
console.log(result); // => Name1 and Name2 are equal

// create a program that takes the birth year of a person finds the age and gives permission if the user is more than 18.

let birthYear = 2010;

function age(yearOfBirth) {
  let currentYear = 2023;
  let usersAge = currentYear - yearOfBirth; // the usersAge variable exists only in the local scope of the function
  return usersAge;
}

let usersAge = age(birthYear); // the variable usersAge is not connected with the one inside the function because they are exist in different scopes.
console.log(usersAge); // 13

usersAge >= 18 ? console.log("You have permission") :  console.log("Sorry, you are to young for this") ; // => Sorry, you are to young for this


