const ourPets = {
    animalType:"Cat",
    names:["Caty","kit-cat","sandy"],
    details:{
        animalType:"dog",
        names:["fluffy","Browser","Frankie"]
    }
}

console.log(ourPets);
console.log(ourPets.names);//[ 'Caty', 'kit-cat', 'sandy' ]
console.log(ourPets.names[1]);//'kit-cat'
console.log(ourPets.details);//{ animalType: 'dog', names: [ 'fluffy', 'Browser', 'Frankie' ] }
console.log(ourPets.details.animalType);//dog
console.log(ourPets.details.names);//[ 'fluffy', 'Browser', 'Frankie' ]
console.log(ourPets.details.names[2]);//Frankie