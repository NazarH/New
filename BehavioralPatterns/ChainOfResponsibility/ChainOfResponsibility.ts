interface Operations{
    sum: (value: number) => object;
    diff:(value: number) => object;
    mult:(value: number) => object;
    div: (value: number) => object;
}

class Calculation implements Operations{
    constructor(public numb: number = 0){}

    sum(value: number){ 
        this.numb += value; 
        return this; 
    }
    diff(value: number){ 
        this.numb -= value; 
        return this; 
    }
    mult(value: number){ 
        this.numb *= value; 
        return this; 
    }
    div(value: number){ 
        this.numb /= value; 
        return this; 
    }
}

class Calculator extends Calculation{
    constructor(public numb: number = 0, public arch: any[] = []){ super() }

    setNumber(value: number){
        this.numb = value;
        return this;
    }

    addToArch(){
        this.arch.push(this.numb);
        return this;
    }

    delLastElem(){
        this.arch.splice(this.arch.length - 1, 1);
        return this;
    }

    cleanArch(){
        this.arch = [];
        return this;
    }

    cleanNumb(){
        this.numb = 0;
        return this;
    }

    showArch(){
        console.log(this.arch);
    }
}

let number = new Calculator(5);

number.sum(11).diff(8).mult(3).div(2).addToArch().cleanNumb()
      .setNumber(3).sum(21).diff(10).mult(3).div(2).addToArch()
      .showArch();

