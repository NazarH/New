interface Employ{
    responsibilities: () => any;
    work:() => string;
    getPaid:() => string;
}

class Employee implements Employ{
    constructor(public name: string, public salary: number) {}
  
    responsibilities() {}
  
    work():string {
      return `${this.name} виконує ${this.responsibilities()}`;
    }
  
    getPaid():string {
      return `${this.name} має заробітну платню - ${this.salary}$`;
    }
}
  
class Developer extends Employee {
    constructor(public name: string, public salary: number) {
        super(name, salary);
    }
  
    responsibilities():string {
      return 'процес створення програм';
    }
}
  
class Tester extends Employee {
    constructor(public name: string, public salary: number) {
        super(name, salary);
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