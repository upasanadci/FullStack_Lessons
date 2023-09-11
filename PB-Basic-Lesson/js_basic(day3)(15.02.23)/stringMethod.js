//slice() extract the part of the string and return the rest part.

let str1 = "JavaScript is not confusing";
console.log(str1.slice(4));//Script is not confusing
console.log(str1.slice(4,10));//Script
console.log(str1.slice(7,15));//ipt is n
console.log(str1.slice(14,0));//' '
console.log(str1.slice(-3));//ing
console.log(str1.slice(-9,-3));//confus(-3 > -9)

//if the first argument is bigger than the second,it will reverse them
console.log(str1.substring(0,14));//JavaScript is 
console.log(str1.substring(14,0));//JavaScript is 

//toUpperCase() string will be in Upper case(capital letters)
//toLowerCase() string will be in lower case(small letters)
let str2 = "Hello World";
console.log(str2.toUpperCase());//HELLO WORLD
console.log(str2.toLowerCase());//hello world
console.log("Checking the output",str2.toUpperCase().includes("HELLO"));

//trim() will remove white space
let str3 = "    Hello World    "
console.log(str3.trim());
console.log(str3.trimEnd());
console.log(str3.trimStart());

//includes() will check if the string exist or not than return the output in Boolean True or False
let str4 = "Hello World How are you";
console.log(str4.includes("World"))//true
console.log(str4.includes("how"))//false

