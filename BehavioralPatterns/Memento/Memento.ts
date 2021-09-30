class Memento{
    constructor(public value: any){}
}

class Creator{
    save(val: any): object{ 
        return new Memento(val); 
    }
    restore(memento: Memento){ 
        return memento.value; 
    }
}

class Caretaker{
    constructor(public values: any[] = []){}

    addMemento(memento: any){ 
        this.values.push(memento);
    }
    getMemento(index: number){
        return this.values[index];
    } 
}

const careTaker = new Caretaker();
const create = new Creator();

careTaker.addMemento(create.save('One'));
careTaker.addMemento(create.save('One, two'));
careTaker.addMemento(create.save('One, two, three'));

console.log(create.restore(careTaker.getMemento(1)));