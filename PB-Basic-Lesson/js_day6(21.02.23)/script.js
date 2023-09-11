//falsy value
// undefined, null, "", 0, false, NaN
//NaN = "Hello1234"

var a = 3;
let str = "Hello";
let result = a*str;
let obj = {firstName:"Upasana", lastName:"Tailor"}
console.log(obj);
console.log("Not a number",result);//NaN
console.log(typeof(result))//number
console.log(typeof(undefined));//undefined
console.log(typeof(null));//object
console.log(typeof(obj));//object

//parseInt() will return a whole number and convert string into a number or integer.Space are allowed
console.log(parseInt("10"));//10
console.log(parseInt(10));//10
console.log(parseInt("10 20"));//10 
console.log(parseInt("10hello"));//10
console.log(parseInt("hello 10"));//NaN
console.log(typeof("hello10"));//string
console.log(parseInt("10.89"))//10
console.log(parseInt("-10"));//-10

//parseFloat()
console.log("JS methods",parseFloat("10.89"))//10.89
console.log(parseFloat("10 20"))//10
console.log(parseFloat("-10"));//-10



//example for parseInt()
var a = "10";
let b = 10;
console.log(a+b)//1010
console.log(parseInt(a)+b);//20

//console.log("10"+"20");

//Number() method will convert javascript variables into number

console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number("hello"));//NaN
console.log(Number("10"))//10
console.log(Number("10.54"));10.54
console.log(Number("hello 10"));//NaN
console.log(Number("10 Hello"));//NaN "10 20 hello 29"

