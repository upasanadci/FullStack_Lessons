class Rectangle{
    constructor(height,width,color){
        this.height = height
        this.width = width
        this.color = color
    }
    area(){
        return this.height*this.width
    }

    perimeter(){
        this.height = 3
        return 2*(this.height + this.width)
    }

    detail(){
        console.log(`Rectangle color is ${this.color} and has width ${this.width} `)
    }

}
const rectangle1 = new Rectangle(4,5,"Red")
console.log(rectangle1.area());//20
console.log(rectangle1.perimeter())//18
rectangle1.detail()

const rectangle2 = new Rectangle(7,8,"Blue")
console.log(rectangle2.area());//56
console.log(rectangle2.perimeter());//30
rectangle2.detail()