class Circle {
    constructor(radius) {
        console.log('you did new me<-------------------');
        this.radius = radius;
        Circle.circlesMade++;
    };

    static draw(circle, canvas) {
        // Canvas drawing code
        console.log('!!!Drawing circle.radius=' + circle.radius + ' on canvas');
    };

    static get circlesMade() {
        return !this._count ? 0 : this._count;
    };
    static set circlesMade(val) {
        this._count = val;
    };

    area() { //instance method
        return Math.pow(this.radius, 2) * Math.PI;
    };

    get radius() { //getter
        return this._radius;
    };
    set radius(radius) { //setter
        if (!Number.isInteger(radius))
            throw new Error("Circle radius must be an integer.");
        this._radius = radius;
    };
}

let c = new Circle(5);
console.log(c.area());
console.log(c.radius);
c.radius = 10;
console.log(c.radius);
//c.radius = "str";
console.log(c.radius);

let canvas;
Circle.draw(c, canvas);
console.log(Circle.circlesMade + ' circle');
let c2 = new Circle(6);
let c3 = new Circle(7);
let c4 = new Circle(8);
console.log(Circle.circlesMade + ' circles');
