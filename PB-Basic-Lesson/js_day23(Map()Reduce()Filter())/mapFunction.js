//Map ()

//all the numbers should be multiple of 2
const numbers = [1,2,3,4,5,6]
const double = numbers.map(number => number*2);
console.log(double);//[ 2, 4, 6, 8, 10, 12 ]

let person = [
    {id:20, name:"Moses"},
    {id:23, name:"Mohamad"},
    {id:26, name:"Peculiar"},
]

//Get all the id from person
var personId = person.map(function(per){
    return per.id;
})
console.log(personId);//[ 20, 23, 26 ]

//Get all the name from person
var personName = person.map(per => per.name);
console.log(personName)//[ 'Moses', 'Mohamad', 'Peculiar' ]

console.log(person);