class Bicycle{
    constructor(color,name){
        this.color = color
        this.name = name
        this.speed = 0
        
    }
    start(){
        this.speed = 30
        console.log(`start the bicycle with the speed of ${this.speed} km/h`)
    }
    break(){
        this.speed = 10
        console.log(`break the bike with the speed of ${this.speed} km/h`)
    }
    stop(){
        this.speed = 5
        console.log(`stop the bike with the speed of ${this.speed} km/h`)
    }

    detail(){
        console.log(`The color of bike is: ${this.color} and name is:${this.name}`)
    }
}

const bicycle1 = new Bicycle("green","Hiland")
bicycle1.start();
bicycle1.break();
bicycle1.stop();
bicycle1.detail();

const bicycle2 = new Bicycle("red","EuroBike")
bicycle2.start()
bicycle2.detail()

const bicycle3 = new Bicycle("Blue","TrekBike")
bicycle3.detail()
