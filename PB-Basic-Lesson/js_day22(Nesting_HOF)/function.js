
//Function I:- We can pass some arguments 
// function can be store in a variable
// function will return some value


let addition = function add(a,b){
    return a+b;
}
//console.log(add(4,5));//9
console.log(addition(4,7));//11

function multiplication(a,b){
    return a*b;
}
//console.log(multiplication(7,8))//56

function subtraction(a,b){
    return a-b;
}

function power(a,b){
    return Math.pow(a,b);
}

//Higher Order Function(function II)
//HOF are function that accept function asa a parameter or return a function as well

function operation(a,b,fun){
    return fun(a,b);
}
console.log(operation(2,3,addition));//5
console.log(operation(9,20,multiplication));//180
console.log(operation(10,3,subtraction))//7
console.log(operation(2,3,power));


//From array filter the odd number

const arr = [2,3,4,5,6,7,8]
function oddNumber(arr){
    const arrayOfInput = []
    for(let i =0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            arrayOfInput.push(arr[i]);
        }
    }
    return arrayOfInput
}
//console.log(oddNumber(arr));//[ 3, 5, 7 ]

//Lets get even number from array

function evenNumber(arr){
    const arrayOfInput = []
    for(let i =0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            arrayOfInput.push(arr[i]);
        }
    }
    return arrayOfInput;
}

//console.log(evenNumber(arr));//[ 2, 4, 6, 8 ]

//Use even and odd function in higher order function

function filterNumber(arr,fun){
    return fun(arr)
}
console.log(filterNumber(arr,oddNumber));//[ 3, 5, 7 ]
console.log(filterNumber(arr,evenNumber));//[ 2, 4, 6, 8 ]

