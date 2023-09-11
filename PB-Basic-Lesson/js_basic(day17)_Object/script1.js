//Object :- Object store data in a structured way usually with the pair of key and values.

//creating an Object
const laptop = {
    name:"lenovo",
    type:"intel i5",
    id:5
}
console.log(laptop);

const car = {
    name:"BMW",
    color:"Black",
    year:2021
}

//console.log(car);

//access or read the property of object

console.log(laptop.name);//lenovo
console.log(car.year);//2021

//insert or add some new property

laptop.color = "silver";
console.log(laptop);

car.model = "x5";
console.log(car);

//change the property

laptop.color = "Black";
console.log(laptop);

car.name = "Mercedes";
console.log(car);

//delete the property

delete car.year;
console.log(car);

delete laptop.type;
console.log(laptop);