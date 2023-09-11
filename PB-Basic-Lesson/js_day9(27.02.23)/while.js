/*let arr = ["a","b","c"]
var i = 0;
while(i<=arr.length){
    console.log(`My array is at index ${i}:${arr[i]}`);
    i++;
}

var i = 10;
while(i<=5){
    console.log("print the number",i)
    i++;
}*/


//add a new element to the array
/*const arr1 = ["pen","paper","pencil","eraser"]
while(arr1.length <= 3){
    const newArray = arr1.push("sharpner");
    console.log(`The new array is ${newArray}`);
}
console.log(arr1);*/

//remove an element from existing array (arr1.length > 3)
//write a programme for an array that have only one element left (arr1.length > 1)

const arr1 = ["pen","paper","pencil","eraser"]
while(arr1.length > 3){
    const array = arr1.shift()
    console.log(`The removed item is ${array}`);
}
console.log(arr1);

