//Methods
//bind(),apply(),call()

const fruit = {
    name:"Banana",
    color:"yellow",
    size:"small",
    greet:function(){
        //console.log("Hello all");
        return `Hello all`;
    }
}
console.log(fruit);
console.log(fruit.color);
console.log(fruit.greet);
console.log(fruit.greet());

const dog = {
    name:"German Shepherd",
    color:"Black",
    tail:1,
    legs:4,
    data:function(){
        console.log("There is detail of the dog");
    }
}

console.log(dog);
console.log(dog.data());

//this as a keyword refer to an Object.
//this refer to 'owner ' of the function.
//Which Object depends on how this is being invoked(call).
const cat = {
    name : "Caty",
    color:"White",
    legs:4,
    detail:function(){
        //console.log("Hey I am cat");
        return `Cat name is${this.name},her color is ${this.color}. It has ${this.legs} legs`;
    }
}

console.log(cat);
console.log(cat.detail());

const person = {
    name:"Upasana",
    country:"India",
    city:"Landsberg",
    fullDetail:function(){
        return `My name is ${this.name}. I come from ${this.country} and I live in ${this.city}`;
    }

}

console.log(person);
console.log(person.fullDetail());

