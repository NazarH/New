class Calculation {
    constructor(numb = 0) {
        this.numb = numb;
    }
    sum(value) {
        this.numb += value;
        return this;
    }
    diff(value) {
        this.numb -= value;
        return this;
    }
    mult(value) {
        this.numb *= value;
        return this;
    }
    div(value) {
        this.numb /= value;
        return this;
    }
}
class Calculator extends Calculation {
    constructor(numb = 0, arch = []) {
        super();
        this.numb = numb;
        this.arch = arch;
    }
    setNumber(value) {
        this.numb = value;
        return this;
    }
    addToArch() {
        this.arch.push(this.numb);
        return this;
    }
    delLastElem() {
        this.arch.splice(this.arch.length - 1, 1);
        return this;
    }
    cleanArch() {
        this.arch = [];
        return this;
    }
    cleanNumb() {
        this.numb = 0;
        return this;
    }
    showArch() {
        console.log(this.arch);
    }
}
let number = new Calculator(5);
number.sum(11).diff(8).mult(3).div(2).addToArch().cleanNumb()
    .setNumber(3).sum(21).diff(10).mult(3).div(2).addToArch()
    .showArch();
