class Equipment {
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price || 0;
    }
}
class Engine extends Equipment {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
}
;
class Body extends Equipment {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
}
;
class Tools extends Equipment {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
}
;
class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = [];
    }
    add(equipment) {
        this.equipments.push(equipment);
    }
    getPrice() {
        return this.equipments
            .map(equipment => equipment.getPrice())
            .reduce((a, b) => a + b);
    }
}
;
class Car extends Composite {
    constructor(name) {
        super();
        this.name = name;
        this.name = name;
    }
}
;
const someCar = new Car('Audi');
someCar.add(new Engine('SomeEngine', 1500));
someCar.add(new Body('SomeBody', 5000));
someCar.add(new Tools('Tools', 3000));
