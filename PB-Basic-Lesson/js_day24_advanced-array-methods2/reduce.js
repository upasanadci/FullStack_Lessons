// find the sum of all the numbers inside the array

const array = [1, 2, 3, 4, 5, 6];

//// solve it with for each method

let accumulator = 0;

array.forEach((current) => {
  accumulator = accumulator + current;
});

console.log(accumulator);

// solve it with a for loop

let accumulator2 = 0;

for (i = 0; i < array.length; i++) {
  accumulator2 = accumulator2 + array[i];
}

console.log(accumulator2);

// solve it with reduce method

const sumNumbers = array.reduce((accumulator, current) => {
  return accumulator + current; //  0 + 1 = 1
  //  1 + 2 = 3
  //  3 + 3 = 6
  //  6 + 4 = 10
}, 0);

console.log(sumNumbers);

// What reduce method takes as arguments? array.reduce(function, initial value of the accumulator).
// what the function inside reduce takes as arguments ? function(accumulator , currentItem).
// When do we use the reduce method ? When we want to reduce an array to a single value.
// What the reduce method returns ? the updated value of the accumulator.
// Does reduce method modifies the original array ?  no.

///////////////////////////////////////////////////////////////////////////////////////

// write a function that takes an array of strings and return an obj with numbers as keys and the strings as values

const colors = ["yellow", "green", "blue", "red", "purple"];

const arrayToObject = (arr) => {
  const objColors = arr.reduce((obj, item, index) => {
    // console.log("index" , index)
    // console.log("item" , item)
    obj[index + 1] = item; // index+1 as a key and item as a value.
    console.log(obj);
    return obj;
  }, {});
  return objColors;
};

console.log(arrayToObject(colors));

//////////////////////////////////////////////////////////

// find the biggest number inside an array

const numbers = [12, 45, 67, 22, 5, 76, 4];

// solve it with spread operator.
let maxNumber = Math.max(...numbers);

console.log(maxNumber);

// solve it with for loop

let maxNumberLoop = 0;

// for (let i = 0; i < numbers.length; i++) {
for (let num of numbers) {
  if (num > maxNumberLoop) {
    maxNumberLoop = num;
  }
}

console.log(maxNumberLoop);

// solve it with reduce

const maxNumberReduce = numbers.reduce((maxNum, item) => {
  return Math.max(maxNum, item); // 0 , 12
  //  12, 45
  // 45,67
  // 67 , 22
  // 67 , 5
  // 67 ,76
  // 76,4
}, 0);

console.log(maxNumberReduce);

//////////////////////////////////////////////////////////////

// return am object with keys the vowels in the string and value number of how many times we meet this vowel.

function vowelcount(str) {
  let vowels = ["a", "e", "i", "o", "u"];

  let output = {};
  for (let i in str) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      if (output[char]) {
        output[char] += 1;
      } else {
        output[char] = 1;
      }
      // output[char] = output[char]? output[char] + 1 : 1;
    }
  }
  return output;
}

console.log(vowelcount("hello"));
console.log(vowelcount("Elie"));
console.log(vowelcount("Matt"));
console.log(vowelcount("hmm"));
console.log(vowelcount("I Am awesome and so are you"));

///////////////////////////////////////////////////////////////////////

const vowelcountReduce = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  //convert my string to array
  let arr = str.toLowerCase().split("");

  const result = arr.reduce((obj, item) => {
    if (vowels.includes(item)) {
      if (obj[item]) {
        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
    }
    return obj;
  }, {});
  return result;
};

let objectFromString = vowelcountReduce("I Am awesome and so are you");
console.log("objectFromString:" , objectFromString)


