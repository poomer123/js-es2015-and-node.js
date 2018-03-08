class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    greet() {
        console.log('Hi, Dev')
    
    }
    set color(c) {
        this._color = c
    }

    get color() {
        return this._color
    }

    get dimension() {
        return `${this.height} x ${this.width}`
    }

    static area(c) {
        return c.width * c.height
    }

    thearea(h,w) {
        return w * h
    }
}

const r = new Rectangle(20, 10)
console.warn(r)
console.warn(r.height)
console.warn(r.width)
r.greet()

r.color = 'red'
console.warn(r.color)

console.log(r.dimension)

console.log(Rectangle.area(r))

console.log(r.thearea(50,3))



class Square extends Rectangle {
    constructor(width){
        super(width, width)
    }
}

const s = new Square(10)
console.log(s.dimension)
console.log(Square.area(s))