let person = [
    {
        id:1,
        name:"Rodrigue",
        city:"Berlin"
    },
    {
        id:2,
        name:"Solomon",
        city:"Munich"
    },
    {
        id:3,
        name:"Riccardo",
        city:"Frankfurt"
    }
]
console.log(person);
console.log(person[0]);//{ id: 1, name: 'Rodrigue', city: 'Berlin' }
console.log(person[1]);//{ id: 2, name: 'Solomon', city: 'Munich' }
console.log(person[2]);//{ id: 3, name: 'Riccardo', city: 'Frankfurt' }
console.log(person[0].name)//Rodrigue
console.log(person[2].city)//Frankfurt

let len = person.length;
console.log(len)//3
console.log(person.name)//undefined

for(let i =0; i<len; i++){
    //console.log(person[i]);
     for(a in person[i]){
         console.log(a,person[i][a]);
     }
}

/*
output for this loop is:-
id 1
name Rodrigue
city Berlin
id 2
name Solomon
city Munich
id 3
name Riccardo
city Frankfurt

*/