// http://www.2ality.com/2015/02/es6-classes-final.html


class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
}
    
class ColorPoint extends Point {
        constructor(x, y, color) {
            super(x, y);
            this.color = color;
        }
        toString() {
            return super.toString() + ' in ' + this.color;
        }
}
    
let cp = new ColorPoint(25, 8, 'green');
console.log(    cp.toString()    ); // '(25, 8) in green'
    
console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true


console.log('typeof Point = ', typeof Point);
console.log('typeof ColorPoint = ', typeof ColorPoint);
