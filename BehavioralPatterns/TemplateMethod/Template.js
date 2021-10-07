class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work(func) {
        return `${this.name} виконує ${func}`;
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
    makeDesign() {
        return 'процес проектування ПО';
    }
    responsibilities() {
        return 'процес розробки ПО';
    }
    documentation() {
        return 'документування';
    }
    support() {
        return 'підтримку ПО';
    }
    introduction() {
        return 'процес впровадження ПО';
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
    createAvtotest() {
        return 'створення автотесту';
    }
    documentation() {
        return 'документування';
    }
    scenario() {
        return 'розробку сценаріїв тестування';
    }
    qualityСontrol() {
        return 'контроль якості';
    }
}
const dev = new Developer('Робітник_1', 1000);
console.log(dev.getPaid());
console.log(dev.work(dev.makeDesign()));
const tester = new Tester('Робітник_2', 500);
console.log(tester.getPaid());
console.log(tester.work(tester.createAvtotest()));
