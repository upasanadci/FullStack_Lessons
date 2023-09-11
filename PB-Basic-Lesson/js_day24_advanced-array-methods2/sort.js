// Sort method

// sort an array of numbers from smaller to greater

const numbers = [2, 5, 3, 9, 7, 6, 1];

numbers.sort();

console.log(numbers); // [1, 2, 3, 5,6, 7, 9]

const newNumbers = [3, 1, 2, 7, 30, 20, 18];

newNumbers.sort(); // it only checks for the first character

console.log(newNumbers); // [1, 18, 2, 20,3, 30, 7]

newNumbers.sort((a, b) => {
  return a - b;
});

console.log(newNumbers); // [1,  2,  3, 7,18, 20, 30]

//////////////////////////////////////////////////////////////////////////

const products = [
  { name: "samsung", price: 670, id: 1 },
  { name: "iphone", price: 880, id: 2 },
  { name: "Xiaomi", price: 340, id: 3 },
  { name: "nokia", price: 120, id: 4 },
];

products.sort((a, b) => {
  return a.price - b.price;
});

console.log(products);

///////////////////////////////////////////////////////////////////////////

const animals = ["cat", "dog", "bee", "whale", "tiger", "dolphin"];

const sortedAnimals = [...animals]; // make a copy wit h the spread operator

sortedAnimals.sort();

console.log(animals);
console.log(sortedAnimals);



// What sort method takes as an argument ? It can be a Function or nothing at all. depends on the case.
// what arguments the function inside the sort method takes ? (a ,b)
// when do we use the sort method ? we use it when we want to sort numbers or stings(alphabetically)
// what it returns ? the sorted version of the input array. Always an array
// does sort method modifies the original array ? Yes.
