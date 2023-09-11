//recursion

//number 10 (1 to 10) sum of 10 numbers

function sumRange(n){
    sum = 0;
    for(let i =0; i<= n; i++){
        sum+=i;//sum =sum+i;
    }
    return sum;
}

//console.log(sumRange(10));//(1+2+3+4+5+6+7+8+9+10)sum = 55

//console.log(sumRange(20));//210

//write the above programme using recursion

function sumOfNumbers(n){
    if(n == 1 ){
        return 1;
    }
    return n + sumOfNumbers(n-1);

}
console.log(sumOfNumbers(10))//55
console.log(sumOfNumbers(20))//210

//print a number in descending order(5,4,3,2,1)
//print fibonacci series(1,2,3,4,5)//