class Account {
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} using ${this.name}`);
        }
        else if (this.incomer) {
            console.log(`Cannot pay using ${this.name}`);
            this.incomer.pay(orderPrice);
        }
        else {
            console.log('Unfortunately, not enough money');
        }
    }
    canPay(amount) {
        return this.balance >= amount;
    }
    setNext(account) {
        this.incomer = account;
    }
}
class MasterCard extends Account {
    constructor(balance, name = 'MasterCard') {
        super();
        this.balance = balance;
        this.name = name;
    }
}
class PayPal extends Account {
    constructor(balance, name = 'PayPal') {
        super();
        this.balance = balance;
        this.name = name;
    }
}
class Visa extends Account {
    constructor(balance, name = 'Visa') {
        super();
        this.balance = balance;
        this.name = name;
    }
}
let master = new MasterCard(200);
let paypal = new PayPal(400);
let visa = new Visa(600);
master.setNext(paypal);
paypal.setNext(visa);
master.pay(438);
