class Memento {
    constructor(value) {
        this.value = value;
    }
}
class Creator {
    save(val) {
        return new Memento(val);
    }
    restore(memento) {
        return memento.value;
    }
}
class Caretaker {
    constructor(values = []) {
        this.values = values;
    }
    addMemento(memento) {
        this.values.push(memento);
    }
    getMemento(index) {
        return this.values[index];
    }
}
const careTaker = new Caretaker();
const create = new Creator();
careTaker.addMemento(create.save('One'));
careTaker.addMemento(create.save('One, two'));
careTaker.addMemento(create.save('One, two, three'));
console.log(create.restore(careTaker.getMemento(1)));
