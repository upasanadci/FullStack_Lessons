//while loop
/*

declare variable
while(condition){
    code
}
*/


//print the number from 1 to 5;

for(let i = 1; i<=5; i++){
    console.log("Number from 1 to 5",i);
}

/*let i = 1;
while(i<=5){
    console.log("Printing number from 1 to 5",i);
    i++;
}*/

//print and count all the odd  number between 1 to 100

let i = 0;
let count = 0;
while(i<=100){
    if(i%2 !== 0){
        console.log(i);
        count = count+1
    }
    i++;
}
console.log("Total odd number are:",count);