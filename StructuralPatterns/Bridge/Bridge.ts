class Figure{
    getFigure(){}
    setColor(color: any){}
}

class Сircle extends Figure{
    color: any;

    constructor(color: any){
        super();
        this.color = color;
    }

    getFigure(){
        return `Circle is ${this.color.getColor()}`;
    }

    setColor(color: any){
        this.color = color;
    }
}

class Square extends Figure{
    color: any;

    constructor(color: any){
        super();
        this.color = color;
    }

    getFigure(){
        return `Square is ${this.color.getColor()}`;
    }

    setColor(color: any){
        this.color = color;
    }
}

class Black{
    getColor(){
        return 'black';
    }
}

class White{
    getColor(){
        return 'white';
    }
}

class Red{
    getColor(){
        return 'red';
    }
}

const blackColor = new Black();
const whiteColor = new White();
const redColor = new Red();

const circle = new Сircle(blackColor);
const square = new Square(whiteColor);

console.log(circle.getFigure());
console.log(square.getFigure());

circle.setColor(whiteColor);
square.setColor(redColor);

console.log(circle.getFigure());
console.log(square.getFigure());


