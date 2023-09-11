/*
do{
    code
}while(condition)
*/

//print number from 1 to 5

/*var i = 0;
do{
    console.log("do...while loop output",i);
    i++;
} while(i<=5);*/

//difference between do...while and while loop


var i = 0;
do{
    console.log("do..while loop",i);
    i++;
}while(i<=5);

//print the array



let arr1 = ["banana","apple"]
var i = 0;
do{
    console.log(`My array for do..while is at index ${i}:${arr1[i]}`);
    i++;
}while(i < arr1.length);