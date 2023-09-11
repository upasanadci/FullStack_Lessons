// Arrays

// In an array we can store a collection of elements of any data type

// Inside one array I can store different data type elements. One extra comma will create an empty item


const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// Using const for the declaration of an array still allows us to modify the elements inside add or remove them as well, but we cannot assign a completely new array.

const shoppingList = ["milk", "bread", "cheese", "pasta"];


// shoppingList = [1,2,3,4,5] // this gives an error

console.log(shoppingList);


const lengthOfShoppingList= shoppingList.length

console.log(lengthOfShoppingList)

// I can access items inside the array with square brackets(array literals) and the index of the element. The index starts from 0 like in the strings 

let secondItem = shoppingList[1]

console.log(secondItem)


console.log(shoppingList[5]) // when the index doesn't exist I will get undefined

// Re-assigning an item inside the array with square brackets 

shoppingList[0] = "juice"

// add a new item inside the array. We must always use the index of the last item +1 otherwise we get empty items

shoppingList[4] = "tomatoes"

console.log(shoppingList);




