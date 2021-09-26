class Figures{
    getFigure(){}
    setColor(color: Colors){}
}

class Сircle extends Figures{
    color: any;

    constructor(color: any){
        super();
        this.color = color;
    }

    getFigure(){
        return `Круг ${this.color.getColor()}`;
    }

    setColor(color: Colors){
        this.color = color;
    }
}

class Triangle extends Figures{
    color: any;

    constructor(color: any){
        super();
        this.color = color;
    }

    getFigure(){
        return `Трикутник ${this.color.getColor()}`;
    }

    setColor(color: Colors){
        this.color = color;
    }
}

class Colors{
    getColor(){}
}


class Red  extends Colors{
    getColor(){
        return 'Червоний';
    }
}

class Blue extends Colors{
    getColor(){
        return 'Синій';
    }
}



const redColor = new Red();
const blueColor = new Blue();

const circle = new Сircle(redColor);
const triangle = new Triangle(blueColor);

console.log(circle.getFigure());
console.log(triangle.getFigure());

circle.setColor(blueColor);
triangle.setColor(redColor);

console.log(circle.getFigure());
console.log(triangle.getFigure());