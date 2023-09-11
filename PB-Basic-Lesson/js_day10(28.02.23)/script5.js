//Write a programme to generate factorial of a number
// 8! = 8*7*6*5*4*3*2*1 = 
//  7! = 7*6*5*4*3*2*1 = 
//  5! = 5*4*3*2*1 = 120
//  0! = 1
//  1! = 1
//formula = n * (n-1)!
// 6! = 6 * 5! = 6*5*4*3*2*1

function factorial(num){
    if(num == 0 || num == 1){ //factorial of 1 and 0 is always 1 if you pass any number 0 or 1 ,if statement will return 1
        return 1                // when the number is bigger it will go to else and give the factorial of that number
    }else{
        return num * factorial(num - 1)
    }
}

let x = factorial(3);
console.log(x);

// 


//Write a programme to generate a random number

function genRandom(min,max){
    return Math.floor(Math.random()* (max-min)) + min;
}
console.log(genRandom(1,9));//generate a random number between 1 and 9
console.log(genRandom(40,60));//generate a random number between 40 and 60