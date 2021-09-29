class Vehicle {
    timeTaken: number;

    travelTime(): number {
      return this.timeTaken;
    }
}
  
class Bus extends Vehicle {
    constructor(public timeTaken: number = 10) {
      super()
    }
}
  
class Taxi extends Vehicle {
    constructor(public timeTaken: number = 5) {
      super()
    }
}
  
class Car extends Vehicle {
    constructor(public timeTaken: number = 3) {
      super()
    }
}
  
class Commute {
    travel(transport: Vehicle) {
      return transport.travelTime();
    }
}
  
const commute = new Commute();
  
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));