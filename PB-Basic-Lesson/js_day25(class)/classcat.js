class Cat{
    constructor(color,height,length,weight){
        this.color = color
        this.height = height
        this.length = length
        this.weight = weight
    }
    playing(){
        return `The cat of color ${this.color} is playing`
    }
    sleep(){
        return `The cat of height ${this.height} is sleeping on sofa`
    }
    eat(){
        return `The ${this.color} color cat eats a lot`
    }
    details(){
        return `This cat color is ${this.color}.The height of cat is${this.height} with ${this.weight}`
    }
}

const cat1 = new Cat("Yellow",3.5,4,"15kg");
console.log(cat1.playing());
console.log(cat1.sleep());
console.log(cat1.eat());
console.log(cat1.details());

const cat2 = new Cat("White",4,2.5,"10kg");
console.log(cat2.playing());
console.log(cat2.sleep());
console.log(cat2.eat());