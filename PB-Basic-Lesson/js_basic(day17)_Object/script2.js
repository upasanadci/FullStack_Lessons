const person1 = {
    firstName:"Mads",
    lastName:"Jorgensen",
    city:"Berlin",
    age:26
}

const person2 = {
    firstName:"Rodrigue",
    lastName:"Tjani",
    city:"Hamburg"
}

const person3 = {
    firstName:"Mohamed",
    lastName:"Fazan"

}

console.log(person1);
console.log(person2);
console.log(person3);

//read the value
console.log(person1.firstName);//Mads
console.log(person2.city);//Humburg

//add properties
person3.city = "Frankfurt"
console.log(person3);

person2.age = 40;
console.log(person2);

person3.age = 25;
console.log(person3); 

//modify the property

person1.city = "Munich";
console.log(person1);

console.log(`My name is ${person1.firstName} I live in ${person1.city}`);
console.log(`My name is ${person2.firstName} I live in ${person2.city} My age is${person2.age}`);
console.log(`My name is ${person3.firstName} `);

//Pass the object data using function

function data(person){
    return `My name is ${person.firstName} I live in ${person.city}`;
}

console.log(data(person1));
console.log(data(person2));
console.log(data(person3));

//Write a function that compare the age property of the Object then return boolean

function ageIs(person){
    if(person.age < 30){
        return true;
    }
    else{
        return false;
    }
}

console.log(`${person1.firstName} is less than 30?`,ageIs(person1));//true
console.log(`${person2.firstName} is less than 30?`,ageIs(person2));//false
console.log(`${person3.firstName} is less than 30?`,ageIs(person3));//true