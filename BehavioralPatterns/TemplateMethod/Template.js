class Employee {
    constructor(name, workYears, engLang) {
        this.name = name;
        this.workYears = workYears;
        this.engLang = engLang;
    }
    responsibilities() { }
    work() {
        return `${this.name} виконує ${this.responsibilities}`;
    }
    calcSalary() {
        if (this instanceof Developer) {
            if (this.workYears === 0 && this.engLang === false) {
                return 500;
            }
            return (this.workYears + Number(this.engLang)) * 500;
        }
        else if (this instanceof Tester) {
            if (this.workYears === 0 && this.engLang === false) {
                return 350;
            }
            return (this.workYears + Number(this.engLang)) * 350;
        }
    }
    getPaid(paid) {
        return `${this.name} має заробітну платню - ${paid}$`;
    }
}
class Developer extends Employee {
    constructor(name, workYears, engLang) {
        super(name, workYears, engLang);
        this.name = name;
        this.workYears = workYears;
        this.engLang = engLang;
    }
    gainExp() {
        this.workYears++;
    }
    learnEng() {
        this.engLang = true;
    }
    responsibilities() {
        return 'процес розробки ПО';
    }
}
class Tester extends Employee {
    constructor(name, workYears, engLang) {
        super(name, workYears, engLang);
        this.name = name;
        this.workYears = workYears;
        this.engLang = engLang;
    }
    gainExp() {
        this.workYears++;
    }
    learnEng() {
        this.engLang = true;
    }
    responsibilities() {
        return 'процес тестування';
    }
}
const dev = new Developer('Робітник_1', 2, true);
console.log(dev.getPaid(dev.calcSalary()));
const tester = new Tester('Робітник_2', 0, false);
console.log(tester.getPaid(tester.calcSalary()));
tester.learnEng();
tester.gainExp();
console.log(tester.getPaid(tester.calcSalary()));
