
//rest parameter are used to create a function that accept any number of arguments and return it in the form of array
//spread operator is used to pass an array to a function that require a list of many arguments
//spread operator is used to spread or expand an array.
//spread operators in javascript [...name];
//to copy the elements 

let arr = [1,2,3]
let arr2 = [...arr];
console.log(arr);//[1,2,3]
console.log(arr2);//[1,2,3]

let str = "Hello";
console.log([...str]);//[ 'H', 'e', 'l', 'l', 'o' ]

let text1 = ["one","two","three"]
let text2 = [...text1,"four","five","six"]
let text3 = ["seven",...text1,"eight"]
let text4 = ["nine","eight",...text1]
console.log(text2);//[ 'one', 'two', 'three', 'four', 'five', 'six' ]
console.log(text3)//[ 'seven', 'one', 'two', 'three', 'eight' ]
console.log(text4);//[ 'nine', 'eight', 'one', 'two', 'three' ]

//using spread operator
let value1 = [1,2,3]
let value2 =[...value1]

value1.push(4);
console.log(value1);//[ 1, 2, 3, 4 ]
console.log(value2);//[ 1, 2, 3 ]

//assign value
let arrc1 = [1,2,3]
let arrc2 = arrc1;
arrc1.push(4);
console.log(arrc1);//[1,2,3,4]
console.log(arrc2);//[1,2,3,4]

let str2 = "My name is this"
console.log([...str2]);//[
//     'M', 'y', ' ', 'n',
//     'a', 'm', 'e', ' ',
//     'i', 's', ' ', 't',
//     'h', 'i', 's'
//   ]

