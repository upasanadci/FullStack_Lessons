//print all the number divisible by 2(even number)
const numbers = [1,2,3,4,5,6]
var evenNumber = numbers.filter(item => item%2 === 0);//[2,4,6]
//var evenNumber = numbers.map(item => item%2 === 0);//[ false, true, false, true, false, true ]
console.log(evenNumber);

//print all the data >90
const Students = [
    {name:"Elene",grade:90},
    {name:"Solomon",grade:95},
    {name:"yassine",grade:91},
    {name:"Alice",grade:87}
]
//var studentGrade = Students.map(student => student.grade );//[ 90, 95, 91, 87 ]
var studentGrade = Students.filter(student => student.grade >= 90 )
console.log(studentGrade);
/*
output:-
[
  { name: 'Elene', grade: 90 },
  { name: 'Solomon', grade: 95 },
  { name: 'yassine', grade: 91 }
]

*/
//print the data with the name of BMW
const car = [
    {id:1, name:"BMW", year: 2021},
    {id:2, name:"Tesla",year:2020},
    {id:3, name:"Mercedes", year:2022},
    {id:4, name:"OD", year:2022}
]

let carName = car.filter(function(data){
    return data.name == "BMW";
})
console.log(carName);//[ { id: 1, name: 'BMW', year: 2021 } ]

//write a program to get year = 2022

let carYear = car.filter(function(prop){
    return prop.year == 2022;
})
console.log(carYear);
/*
output:-
{ id: 3, name: 'Mercedes', year: 2022 },
{ id: 4, name: 'OD', year: 2022 }

*/
