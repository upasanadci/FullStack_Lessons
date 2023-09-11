function multiply(a=1,b=5){
    console.log(a);
    console.log(b);
    return `multiplication of numbers is:${a*b}`;
}
//console.log(multiply(2,3));6
console.log(multiply());//5
//console.log(multiply(2));//2*5=10
console.log(multiply(4,6));//24


function addition(a,b){
    if(b === undefined){
        b = 2;
    }
    return a+b;
}
console.log(addition(5));//7
console.log(addition(6,7));//13

function say(message='hi'){
    console.log(message);
}
say();//hi
say('Hello');//Hello
say(undefined);//hi

function add(x,y=2){
    console.log(x);//undefined if x value is not passed
    console.log(y);//undefined if y value is not passed
    return `addition of x and y ${x+y}`;
}
console.log(add());//NaN
console.log(add(3,4));//7
console.log(add(5));//NaN if default value is not set
console.log(add(5))//5+2 if default value of y is set