const array = ["Mads", "Marwah", "Upasana", "Buddhika"];

const upperCaseArray = [];

array.forEach((item) => {
  upperCaseArray.push(item.toUpperCase());
});

console.log(upperCaseArray); // [ 'MADS', 'MARWAH', 'UPASANA', 'BUDDHIKA' ]

// easier with map

// with anonymous function as an argument
const upperCaseMap = array.map((item) => {
  return item.toUpperCase();
});

console.log(upperCaseMap); // [ 'MADS', 'MARWAH', 'UPASANA', 'BUDDHIKA' ]

// with external function as an argument
const capitalLetters = (item) => {
  return item.toUpperCase();
};

const upperCaseMap2 = array.map(capitalLetters);

console.log(upperCaseMap2); // [ 'MADS', 'MARWAH', 'UPASANA', 'BUDDHIKA' ]

// what map takes as an argument? function
// when do we use map? when we want to modify the items of the array
// what map is returning? map returns always an array
// what is the length of the array returned by map? the length of the array returned as always equal with the length of the are passed
// does map method modifies the original array? map will not modify the original array

console.log(array); // [ 'Mads', 'Marwah', 'Upasana', 'Buddhika' ] the original array stays the same

//////////////////////////////////////////////////////////////////

const numbers = [
  1.345556, 5.389543, 7.44447784, 10.567774, 3.87554266, 6.5466522,
];

// cut the decimals

const cutDecimals = (arr) => {
  const result = arr.map((item) => {
    return Number(item.toFixed(2));
    // return Math.round(item)
  });

  return result;
};

console.log(cutDecimals(numbers));

//////////////////////////////////////////////////////////////////////

const fruits = ["apple", "orange", "banana", "strawberry"];

// write a function that converts the array of fruits to an array of objects
// [{name: fruit} , {name:fruit}]

const convertToObject = (arr) => {
  const result = arr.map((item) => {
    return { name: item };
  });
  return result;
};

console.log(convertToObject(fruits));

////////////////////////////////////////////////////////////////////////////

const cars = [
  { brand: "Toyota", model: "Corolla", year: 2019 },
  { brand: "BMW", model: "star", year: 2023, color: "blue" },
  { brand: "Honda", model: "Civic", year: 2020 },
  { brand: "Ford", model: "Mustang", year: 2017 },
];

// write a function that returns only the brands

const returnBrandNames = (arr) => {
  const result = arr.map((item) => {
    return item.brand;
  });
  return result;
};

// smaller version of the function
const returnBrandNamesSmall = (arr) => arr.map((item) => item.brand);

console.log(returnBrandNames(cars));
console.log(returnBrandNamesSmall(cars));

///////////////////////////////////////////////////////////////////////////////

// the function inside map can take 3 different arguments (item, index, array)
// How we can use the index
// form an array of numbers we create an array of objects with id and number

const myNumbers = [2, 3, 5, 6, 7, 8];

const modifiedNumbers = myNumbers.map((item, index, array) => {
  console.log(
    `this is the item ${item} with the index ${index} that belongs in the ${array}`
  );
  return { number: item, id: index + 1 };
});

console.log(modifiedNumbers);


