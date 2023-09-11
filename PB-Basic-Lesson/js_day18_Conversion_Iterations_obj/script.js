// Accessing Properties

const user = {
  userName: "Mike23",
  email: "mike@gmail.com",
  password: 123456,
  age: 29,
  123: "abc", // 123 is the key and "abc" is the value. We access this property only with bracket notation
  "$ income": "1200euro", // in this case "$ income" is the key and "1200euro is the value". We access this property only with bracket notation
  income: 1500, // I can access this with dot notation and bracket notation
};

const usersEmail = user.email; // dot notation

const usersBracketEmail = user["email"]; // bracket notation

console.log(usersEmail);
console.log(usersBracketEmail);

// I can use a variable for accessing a property inside the object only with the bracket notation.
let whichPropertyYouWant = "age";

console.log(user[whichPropertyYouWant]); // 29
console.log(user.whichPropertyYouWant); // undefined

// some keys are not possible to access with the dot notation. numbers or other special characters or keys with spaces
// console.log(user.$ income) // error
console.log(user["$ income"]);

// console.log(user.123) // we cannot access this with dot notation
console.log(user["123"]);

// loop through an object

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2005,
  color: "blue",
};

const objectKeys = Object.keys(car); // Object.keys will return an array with all the keys from our object
console.log(objectKeys); // [ 'brand', 'model', 'year', 'color' ]

const objectValues = Object.values(car); // Object.values will return an array with all the values from our object
console.log(objectValues); // [ 'Toyota', 'Corolla', 2005, 'blue' ]

const objectEntries = Object.entries(car); // Object.entries will return an array with nested arrays that each represents an object property [key, value]
console.log(objectEntries); // [
//     [ 'brand', 'Toyota' ],
//     [ 'model', 'Corolla' ],
//     [ 'year', 2005 ],
//     [ 'color', 'blue' ]
//   ]

const reverseToObject = Object.fromEntries(objectEntries); // takes an array with nested arrays and returns an object
console.log(reverseToObject);
console.log(car);

const arr = [
  ["num1", 23],
  ["num2", 34],
  ["num3", 10],
  ["num4", 2],
];
console.log(Object.fromEntries(arr));

// Examples: Get a random property from the object

const country = {
  name: "Germany",
  language: "German",
  capital: "Berlin",
  currency: "Euro",
};

// get all the keys form the object
const keys = Object.keys(country); // I am getting all the keys inside an array
console.log(keys); // [ 'name', 'language', 'capital', 'currency' ]

const randomIndex = Math.floor(Math.random() * keys.length); // this will give me a number between 0 and 3

const randomKey = keys[randomIndex]; // => I get the random key. keys[0] => "name"
console.log(randomKey);

let randomProperty = country[randomKey]; // bracket notation
console.log(randomProperty);

// example 2 : write a function that counts how much money we spent for groceries

const groceries = {
  // the values are representing the money
  bread: 2,
  milk: 1.2,
  pasta: 1.5,
  fruits: 4,
  mushrooms: 2.5,
};

const totalMoney = (obj) => {
  // first I get the values
  let values = Object.values(obj);
  console.log(values); // [ 2, 1.2, 1.5, 4, 2.5 ]
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    // I loop through the values and add every element in the total variable
    total += values[i];
  }
  return total;
};

console.log(totalMoney(groceries));
