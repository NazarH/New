class Equipment{
    name: string;
    price: number;

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price || 0;
    }
}

class Engine extends Equipment{
    constructor(public name: string, public price: number){
        super();
    }
};

class Body extends Equipment{
    constructor(public name: string, public price: number){
        super();
    }
};

class Tools extends Equipment{
    constructor(public name: string, public price: number){
        super();
    }
};

class Composite extends Equipment{
    equipments: any[];

    constructor(){
        super();
        this.equipments = [];
    }

    add(equipment){
        this.equipments.push(equipment);
    }

    getPrice(): any{
        return this.equipments
        .map(equipment => equipment.getPrice())
        .reduce((a, b) => a + b);
    }
};

class Car extends Composite{
    constructor(public name: string){
        super();
    }
};

const someCar = new Car('Audi');

someCar.add(new Engine('SomeEngine', 1500));
someCar.add(new Body('SomeBody', 5000));
someCar.add(new Tools('Tools', 3000));





