//function is block of code
//why function.... it avoid repetition and make code more clear

/*function comparisonMethod(){
    //code
}
comparisonMethod();*/

function greeting(name,lastName){
    console.log("Hello" +" "+name+" "+lastName);
}
greeting("John","Smith");
greeting("Marwah","Dubai");
greeting("Yassine","k");

//Add two number

function addTwoNumber(a,b,c){
    console.log(a+b+c);
}
addTwoNumber(5,3,44);//52
addTwoNumber(19,40);//undefined because argument for "c" is not passed
addTwoNumber(50,120);//undefined ...........

//Multiplication

function multipleTwoNumber(a,b){
    console.log(a*b);
}
multipleTwoNumber(3,7);//21
multipleTwoNumber(56,213);//11928