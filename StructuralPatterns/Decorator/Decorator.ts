interface CoffeeInterface{
    getCost(): number;
    getDescription(): string;
}

class SimpleCoffee implements CoffeeInterface{
    getCost(){
        return 10;
    }
    getDescription(){
        return 'Проста кава ';
    }
}

class MilkCoffee implements CoffeeInterface{
    constructor(public coffee: CoffeeInterface){}

    getCost(){
        return this.coffee.getCost() + 2;
    }
    getDescription(){
        return this.coffee.getDescription() + '+ молоко ';
    }
}

class ChocolateCoffee implements CoffeeInterface{
    constructor(public coffee: CoffeeInterface){}

    getCost(){
        return this.coffee.getCost() + 4;
    }
    getDescription(){
        return this.coffee.getDescription() + '+ шоколад';
    }
}

let someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

let milkCoffee = new MilkCoffee(someCoffee);
console.log(milkCoffee.getCost());
console.log(milkCoffee.getDescription());

let milkPlusChocoCoffee = new ChocolateCoffee(milkCoffee);
console.log(milkPlusChocoCoffee.getCost());
console.log(milkPlusChocoCoffee.getDescription());

