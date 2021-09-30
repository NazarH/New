class SimpleCoffee {
    getCost() {
        return 10;
    }
    getDescription() {
        return 'Проста кава ';
    }
}
class MilkCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 2;
    }
    getDescription() {
        return this.coffee.getDescription() + '+ молоко ';
    }
}
class ChocolateCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 4;
    }
    getDescription() {
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
