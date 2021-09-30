class Account{
    incomer: Account;
    balance: number;
    name: string;

    pay(orderPrice: number){
        if(this.canPay(orderPrice)){
            console.log(`Оплата - ${orderPrice}UAH - використовуючи ${this.name}`);
        } else if(this.incomer){
            console.log(`З використанням ${this.name} оплата не можлива`);
            this.incomer.pay(orderPrice);
        } else {
            console.log('Нажаль, грошей не достатньо');
        }
    }

    canPay(amount: number){
        return this.balance >= amount;
    }

    setNext(account: Account){
        this.incomer = account;
    }
}

class MasterCard extends Account{
    constructor(public balance: number, public name: string = 'MasterCard'){
        super();
    }
}

class PayPal extends Account{
    constructor(public balance: number, public name: string = 'PayPal'){
        super();
    }
}

class Visa extends Account{
    constructor(public balance: number, public name: string = 'Visa'){
        super();
    }
}

let master = new MasterCard(200);
let paypal = new PayPal(400);
let visa = new Visa(600);

master.setNext(paypal);
paypal.setNext(visa);

master.pay(438);