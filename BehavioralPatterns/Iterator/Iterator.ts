interface MyInt{
    next: () => object;
    prev: () => object;
}

class MyIterator implements MyInt{
    constructor( public data: any[], public index = -1, public done = false){}

    next() {
        if (this.index < this.data.length) {
            this.index++;
            return {value: this.data[this.index], done: false, index: this.index};
        } else {
            this.done = true;
            return {done: true, msg: 'Кінець колекції', index: this.index};
        }
    }

    prev() {
        if (this.done) {
            this.done = false;
            this.index = this.data.length + 1;
        }
        this.index--;
        if (this.index > -1) {
            return {value: this.data[this.index], done: false, index: this.index};
        } else {
            this.index = -1;
            return {done: this.done, msg: 'Початок колекції', index: this.index};
        }
    }
}

const collection = new MyIterator(['Hi', 'Hello', 'Bye']);

console.log(collection.next());
console.log(collection.next());
console.log(collection.next());
console.log(collection.next());
console.log(collection.next());
console.log(collection.prev());
console.log(collection.prev());
console.log(collection.prev());
console.log(collection.prev());
console.log(collection.next());