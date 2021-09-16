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
        return `Круг ${this.color.getColor()}`;
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
        return `Квадрат ${this.color.getColor()}`;
    }

    setColor(color: any){
        this.color = color;
    }
}

class Black{
    getColor(){
        return 'чёрный';
    }
}

class White{
    getColor(){
        return 'белый';
    }
}

class Red{
    getColor(){
        return 'красный';
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


