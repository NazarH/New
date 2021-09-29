class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    responsibilities() { }
    work() {
        return `${this.name} виконує ${this.responsibilities()}`;
    }
    getPaid() {
        return `${this.name} має заробітну платню - ${this.salary}$`;
    }
}
class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
        this.name = name;
        this.salary = salary;
    }
    responsibilities() {
        return 'процес створення програм';
    }
}
class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
        this.name = name;
        this.salary = salary;
    }
    responsibilities() {
        return 'процес тестування';
    }
}
const dev = new Developer('Робітник_1', 1000);
console.log(dev.getPaid());
console.log(dev.work());
const tester = new Tester('Робітник_2', 500);
console.log(tester.getPaid());
console.log(tester.work());
