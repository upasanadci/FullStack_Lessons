const numbers = [1,2,3,4]
var result = numbers.reduce(function(sum,item){
    return sum+item;
},0);
console.log(result);//10

//if we have a repeated string
const pets = ["dog","cat","chicken","dog","chicken"]

var countPets = pets.reduce(function(obj,pet){
    console.log(obj,pet);
    if(!obj[pet]){
        obj[pet] = 1;
    }
    else{
        obj[pet]++;
    }
    return obj;
},{})
console.log(countPets);//{ dog: 2, cat: 1, chicken: 2 }

const car = [
    {id:1, name:"BMW", year: 2021},
    {id:2, name:"Tesla",year:2020},
    {id:3, name:"Mercedes", year:2022},
    {id:4, name:"OD", year:2022}
]

var countYear = car.reduce(function(sum,item){
    return sum+item.year;
},0)
console.log(countYear);//8085