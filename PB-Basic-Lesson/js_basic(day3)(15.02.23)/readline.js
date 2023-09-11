const input = require('readline-sync');

let firstName = input.question("Enter your First Name");
let lastName = input.question("Enter your last name");
let city = input.question("Enter your city");
console.log(firstName,lastName,city);
console.log(`name:${firstName} lastname:${lastName} city:${city}`);