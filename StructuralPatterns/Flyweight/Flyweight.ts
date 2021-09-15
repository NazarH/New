interface Cars{
    getInfo(): string;
    addService(): string;
}

class Car implements Cars{
    constructor(public model: string, public price: number){}

    getInfo(): string{
        return `Model: ${this.model}, price: ${this.price}`;
    }

    addService(): string{
        this.price += 500;
        return `Final price: ${this.price}`;
    }
}

interface CarsFactory{
    create(model: string, price: number): object;
    getCar(model: string): object;
}

class CarFactory implements CarsFactory{
    cars: any[];
    constructor(){
        this.cars = [];
    }

    create(model: string, price: number): object{
        const candidate = this.getCar(model);
        if(candidate){
            return candidate;
        } else {
            const newCar = new Car(model, price);
            this.cars.push(newCar);
            return newCar;
        }
    }

    getCar(model: string): object{
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();

const bmwX5 = factory.create('bmw', 10000);
const audiA6 = factory.create('audi', 9000);
const bmwX3 = factory.create('bmw', 8000);

console.log(bmwX5);
console.log(audiA6);
console.log(bmwX3);



