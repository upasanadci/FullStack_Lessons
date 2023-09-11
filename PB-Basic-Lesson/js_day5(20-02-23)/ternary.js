//ternary operator
// condition ? expression1 : expression2

// write a program to check the result(if marks are greater then 40 then pass)

let marks = 30;
//let result = (marks >= 40)? console.log("pass") : console.log("fail");
let result = (marks >= 40)? "pass" : "fail";
console.log(`You have ${result} the exam`);

if(marks >= 40){
    console.log("pass");
}
else{
    console.log("fail")
}

// write a program to check a number positive or negative

let a = -3;
let result1 = (a >= 0)? "positive" : "negative";
console.log(`The number is ${result1}`);

if(a >= 0){
    console.log("Number is positive");
}
else{
    console.log("Number is negative")
}