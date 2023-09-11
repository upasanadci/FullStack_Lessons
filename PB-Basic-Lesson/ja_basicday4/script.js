let a = 6;//global scope
if(a >=4){
    let a = 8;//block scope
    console.log("true",a);
}
else{
    console.log("false",a);
}

if(a <= 2){
    console.log("Number is not big",a);
}
else{
    console.log("number is big",a)
}


let b = 3;//global scope
/*if(a > 4){
   let a = 4;
    console.log("true",a);
}
else{
    console.log("false",a);
}*/

if(a<4){
    let a = 5;
    console.log("true",a);
}
else{
   
    console.log("false",a);
}

