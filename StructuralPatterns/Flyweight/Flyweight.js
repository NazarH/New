class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    getInfo() {
        return `Model: ${this.model}, price: ${this.price}`;
    }
    addService() {
        this.price += 500;
        return `Final price: ${this.price}`;
    }
}
class CarFactory {
    constructor() {
        this.cars = [];
    }
    create(model, price) {
        const candidate = this.getCar(model);
        if (candidate) {
            return candidate;
        }
        else {
            const newCar = new Car(model, price);
            this.cars.push(newCar);
            return newCar;
        }
    }
    getCar(model) {
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
