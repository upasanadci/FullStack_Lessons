class Person{
    constructor(name,city,age){
        this.name = name
        this.city = city
        this.age = age
    }

    getData(){
        console.log(`The name of person is ${this.name}`)
    }
    editName(){
        this.name = "Peculiar"
    }

}
const person1 = new Person("Netta","Berlin",18)
person1.getData();
person1.editName()
person1.getData()