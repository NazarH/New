class Vehicle {
    travelTime() {
        return this.timeTaken;
    }
}
class Bus extends Vehicle {
    constructor(timeTaken = 10) {
        super();
        this.timeTaken = timeTaken;
    }
}
class Taxi extends Vehicle {
    constructor(timeTaken = 5) {
        super();
        this.timeTaken = timeTaken;
    }
}
class Car extends Vehicle {
    constructor(timeTaken = 3) {
        super();
        this.timeTaken = timeTaken;
    }
}
class Commute {
    travel(transport) {
        return transport.travelTime();
    }
}
const commute = new Commute();
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));
