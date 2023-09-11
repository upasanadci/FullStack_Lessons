const person = {
    firstName:"John",
    lastName:"Smith",
    email:"johnsmith@gmail.com",
    contact:015433232,
    address:{
        area:{
            street:12345,
            PZL:86899
        },
        city:"Munich",
        country:"Germany"
    },
}

console.log(person);
console.log(person.email);//johnsmith@gmail.com
console.log(person.address.area);//{ street: 12345, PZL: 86899 }
console.log(person.address.area.PZL);//86899
console.log(person.address.country);//Germany
console.log(person["firstName"]);//John
console.log(person["address"]["area"]);//{ street: 12345, PZL: 86899 }
