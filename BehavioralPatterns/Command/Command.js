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
    constructor(subject, arch = []) {
        super();
        this.subject = subject;
        this.arch = arch;
    }
    setNumber(value) {
        this.numb = value;
        return this;
    }
    cleanNumb() {
        this.numb = 0;
        return this;
    }
    execute(command, value) {
        this.arch.push(command);
        this.subject[command](value);
        return this;
    }
    showArch() {
        console.log(this.arch);
    }
}
const number = new Calculator(new Calculation(5));
number.execute('sum', 11).execute('diff', 8).execute('mult', 3).execute('div', 2).showArch();
