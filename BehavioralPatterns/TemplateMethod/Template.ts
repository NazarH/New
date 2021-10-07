interface Employ{
    work:(func) => string;
    getPaid:() => string;
}

class Employee implements Employ{
    constructor(public name: string, public salary: number) {}
  
    work(func): string{
      return `${this.name} виконує ${func}`;
    }
  
    getPaid():string {
      return `${this.name} має заробітну платню - ${this.salary}$`;
    }
}
  
class Developer extends Employee {
    constructor(public name: string, public salary: number) {
        super(name, salary);
    }

    makeDesign(){
      return 'процес проектування ПО';
    }
  
    responsibilities():string {
      return 'процес розробки ПО';
    }

    documentation(): string{
      return 'документування';
    }

    support(): string{
      return 'підтримку ПО';
    }

    introduction(): string{
      return 'процес впровадження ПО';
    }
}
  
class Tester extends Employee {
    constructor(public name: string, public salary: number) {
        super(name, salary);
    }
  
    responsibilities(): string{
      return 'процес тестування';
    }

    createAvtotest(): string{
      return 'створення автотесту';
    }

    documentation(): string{
      return 'документування';
    }

    scenario(): string{
      return 'розробку сценаріїв тестування'
    }
    
    qualityСontrol(): string{
      return 'контроль якості';
    }
}
  
const dev = new Developer('Робітник_1', 1000);
console.log(dev.getPaid());
console.log(dev.work(dev.makeDesign()));
  
const tester = new Tester('Робітник_2', 500);
console.log(tester.getPaid());
console.log(tester.work(tester.createAvtotest()));