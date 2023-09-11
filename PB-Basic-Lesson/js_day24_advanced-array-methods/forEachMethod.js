const array = ["Mads", "Marwah", "Upasana", "Buddhika"];

// for each method doesn't return anything
// All array methods they take a function as an argument
// item represents each item inside my array and the function will run as many times as the items are. The function run for every item individually
array.forEach(function (item) {});
array.forEach((item) => {});

function printNames(item) {
  // code to be executed
  console.log(item);
}

// calling a function printNames from the for each method
array.forEach(printNames);

// without calling another function
array.forEach((item) => {
  console.log(item);
});

// for each method doesn't return anything

const forEachReturn = array.forEach((item) => {
  return item.toUpperCase();
});

console.log(forEachReturn); // undefined because forEach doesn't return anything

const upperCaseArray = [];

array.forEach((item) => {
  upperCaseArray.push(item.toUpperCase());
});

console.log(upperCaseArray);

// using the for each method with a callback function

// declare a greetings function

const greetPerson = (name) => {
  console.log(`hey there ${name}`);
};

const greetPeople = (arr, fn) => {
  arr.forEach((item) => {
    fn(item);
  });
  // for (let i=0;i<arr.length;i++){
  //     fn(arr[i])
  // }
};

greetPeople(array, greetPerson);
