//write a function to compare two numbers. Let compare if parm1 is bigger than param2.

function comTwoNumber(x,y){
    if(x>y){
        return `X is bigger than Y and value is:${x}`
    }
    else{
        return `Y is bigger than X and value is:${y}`
    }
}
console.log(comTwoNumber(45,23));//45
console.log(comTwoNumber(120,340));//340


//write a programme to check if a number is divisible by 5 or not

function divisibleByFive(num){
    if(num%5 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(divisibleByFive(30));
console.log(divisibleByFive(12));