//string double quotes "Hello";
//backtick `Hello`;
//single quotes 'Hello';

let str1 = "Hello";
console.log(typeof(str1));//string

let str2 = 'Hello';
console.log(typeof(str2));//string

let str3 = `Hello`;
console.log(typeof(str3));

let fName = "Iryna";
let lName = "Khartanovich";
let fullName = `My full name is ${fName} ${lName} that is all &* 90jdisjfdjis `;
console.log(fullName);

let text = `We are 
            learning 
            JavaScript
            Basic` ;
 console.log(text);

let text1 = "JavaScript is\n not difficult";// \n new line
console.log(text1);

let text2 = 'Today is "not" Wednesday';
//let text2 = "Today is \"not\" Wednesday";
console.log(text2);

let text3 = 'It\'s alright';
console.log(text3);

let text4 = "Tomorrow is Thursday"; //output = ToiT 
//position start from 0.For this string position is(0 - 19)
console.log(text4.length);//20
console.log(text4[0]);//T
console.log(text4[19]);//y
console.log(text4[7]);//
console.log(text4[0]+text4[1]+text4[9]+text4[12]);