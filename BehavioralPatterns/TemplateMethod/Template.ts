interface Employ{
    work:() => string;
    getPaid:(paid) => string;
    calcSalary:() => number;
}

class Employee implements Employ{
    constructor(public name: string, public workYears: number, public engLang: boolean) {}

    responsibilities(){}
  
    work(): string{
      return `${this.name} виконує ${this.responsibilities}`;
    }

    calcSalary(){
      if(this instanceof Developer){
        if(this.workYears === 0 && this.engLang === false){
          return 500;
        }
        return (this.workYears + Number(this.engLang)) * 500;
      } else if(this instanceof Tester){
        if(this.workYears === 0 && this.engLang === false){
          return 350;
        }
        return (this.workYears + Number(this.engLang)) * 350;
      }
    }
  
    getPaid(paid):string {
      return `${this.name} має заробітну платню - ${paid}$`;
    }
}
  
class Developer extends Employee {
    constructor(public name: string, public workYears: number, public engLang: boolean) {
        super(name, workYears, engLang);
    }

    gainExp(){
      this.workYears++;
    }

    learnEng(){
      this.engLang = true;
    }
  
    responsibilities():string {
      return 'процес розробки ПО';
    }
}
  
class Tester extends Employee {
    constructor(public name: string, public workYears: number, public engLang: boolean) {
        super(name, workYears, engLang);
    }

    gainExp(){
      this.workYears++;
    }

    learnEng(){
      this.engLang = true;
    }
  
    responsibilities(): string{
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