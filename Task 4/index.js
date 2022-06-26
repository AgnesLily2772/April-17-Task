// write a class to calculate uber price.
class Uber {
    constructor(name, startHr, endHr,startMin,endMin,distance) {
        this.name = name;
        this.startHr = startHr;
        this.endHr = endHr;
        this.startMin = startMin;
        this.endMin = endMin;
        this.distance = distance;
    }
    
    calculatePrice() {
        let timeHr = this.endHr-this.startHr;//10-9
        let timeMin = this.endMin - this.startMin;//30-15
        let time = (timeHr*60)+timeMin;//(1*60)+15
        let price = this.distance * time;//75*4
        console.log(price);
    }
}

let u = new Uber("KANI",9,10,15,30,4);
u.calculatePrice();
