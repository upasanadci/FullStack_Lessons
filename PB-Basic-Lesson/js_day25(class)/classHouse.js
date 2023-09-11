class House{
    constructor(color,rooms,size){
        this.color = color;
        this.rooms = rooms;
        this.size = size
    }

    getColor(){
        console.log(`The color of House is`,this.color);
    }

    getDetails(){
        console.log(`The size of house is ${this.size},this house has ${this.rooms} rooms`)
    }
}

const house1 = new House("Orange",4,"80sq");
house1.getColor();
house1.getDetails();

const house2 = new House("Blue",3,"70sq")
house2.getColor();
house2.getDetails();