//Convert the UML diagram to Typescript class. - use number for double


class Circle {
    constructor(radius) {
        this.radius = 1.0;
        this.color = "red";
    }
    Circle(radius) {
        this.radius = radius;
    }
    Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        let r = this.radius;
        console.log(r)
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        let c = this.color;
        console.log(c);
    }
    setColor(color) {
        this.color = color;
    }
    toString() {
        let str = "Circle[radius=" + this.radius + ",color=" + this.color + "]";
        console.log(str);
    }
    
    getArea() {
        let area = Math.PI * this.radius * this.radius;
        console.log(area);
    }
    
    getCircumference() {
        let circum = 2 * Math.PI * this.radius
        console.log(circum) ;
    }

}

let c1 = new Circle();
c1.setColor("green");c1.setRadius(1.7);
c1.getRadius();
c1.getColor();
c1.getArea();
c1.getCircumference();

console.log("-------------------")

let c2 = new Circle();
c2.setColor("blue");
c2.setRadius(2.5);
c2.getRadius();
c2.getColor();
c2.toString();