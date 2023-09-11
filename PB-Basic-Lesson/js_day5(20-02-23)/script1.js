// or operator
const boyfriendIsPaying = true;
const isSale = false;

if(boyfriendIsPaying && isSale){ //true || false = true (true && false = false)
    console.log("Jesse will go to shopping");
}
else{
    console.log("Jesse will go not to shopping");
}

let age = 18;
let ownCar = true;
if(age >= 13 && ownCar){ //true && true = true
    console.log("yes you can drive the car");
}
else{
    console.log("no you can not drive the car");
}


if(age >= 16 && ownCar){
    let age = 13 
    if(age<=18){ // output will be these both console ("yeeeeeh","yes you can drive the car")
        console.log("yeeeeeh");
    }
    console.log("yes you can drive the car",age);
}
else{
    console.log("no you can not drive the car");
}

// not operator

const bfPaying = true;
const isSale1 = false;
if(!bfPaying || isSale1){// false || false = false, without ! operator condition is true(true|| false = true)
    console.log("I will go for shopping");
}
else{
    console.log("I will not go for shopping");
}
