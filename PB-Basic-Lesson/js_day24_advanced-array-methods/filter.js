// Filter Method

// write a function that takes an array of numbers and returns only the numbers that are greater or equal to 10

const numbers = [5, 23, 7, 12, 8, 75, 10, 2, 3, 9, 18];

const greaterThan10 = (arr) => {
  const result = arr.filter((item) => {
    return item >= 10; // if this condition is true the item will return to the result array
  });
  console.log(arr); // [5, 23, 7, 12, 8, 75, 10, 2, 3, 9, 18]
  return result;
};

console.log(greaterThan10(numbers)); // [ 23, 12, 75, 10, 18 ]

// what filter takes as an argument array.filter() ?  function.
// when do we use filter ? when we want only a part(some elements) of the array.
// what filter is returning? array.
// what is the length of the returned array? the length is smaller than the length of the array that we pass.
// does filter modifies the original array? no it doesn't.

// in filter method after return we always write a condition.

//////////////////////////////////////////////////////////////////////////////////////

// write a function that takes an array of people and returns only those who are older that 18

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Ali", age: 19 },
  { name: "Maria", age: 12 },
];

const adults = (arr) => {
  return arr.filter((item) => {
    return item.age >= 18;
    // return item.name.startsWith("Ma") returns only the people that their name starts with Ma
  });
};

console.log(adults(people)); // [ { name: 'Alice', age: 25 }, { name: 'Ali', age: 19 } ]

///////////////////////////////////////////////////////////////////////////////////////

// remove the duplicates from an array

const myLetters = ["a", "a", "b", "c", "b", "d", "e", "d"];

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const uniqueLetters = myLetters.filter((item, index, array) => {
  console.log("values of index", index);
  return array.indexOf(item) === index; // 0 === 0
                                        // 0 === 1
                                        // 2 === 2
                                        // 3 === 3
                                        // 2 === 4
                                        // ...
});

// in every iteration
// value of index = 0,1,2,3,4,5,6,7 but the value of array.indexOf(item) will not follow these numbers.

console.log(myLetters.indexOf("a")); // 0
console.log(myLetters.indexOf("b")); // 2
console.log(myLetters.indexOf("c")); // 3
console.log(myLetters.indexOf("z")); //-1 because 9 is not existing in the array

console.log(uniqueLetters);
