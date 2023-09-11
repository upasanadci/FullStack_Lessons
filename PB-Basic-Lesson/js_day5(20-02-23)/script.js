//logical operators
// And Operator &&
// Or Operator || 
// Not Operator ! 

//vote system
//&& and operator
var age = 21;
if(age>=18 && age<=20){// true && false = false
    console.log("yes you can vote");
}
else{
    console.log("you can not vote");
}

var age = 21;
if(age>= 18 || age<=20){ // true || false = true
    console.log("yes you can vote");
}
else{
    console.log("no,you can not vote");
}

// || or operator
var a = 10;
var b = 15;
if(a>=10 || b<=8){ // true || false = true
    console.log("yes it is true");
}
else{
    console.log("no,it is not true");
}

// ! operator
var a = 18;
if(!a>15){
    console.log("it is true");
}
else{
    console.log("it is not true");
}