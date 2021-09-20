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
    constructor(public subject: any, public arch: any[] = []){ super() }

    setNumber(value: number){
        this.numb = value;
        return this;
    }

    cleanNumb(){
        this.numb = 0;
        return this;
    }

    execute(command: string, value: number){
        this.arch.push(command);
        this.subject[command](value);
        return this;
    }

    showArch(){
        console.log(this.arch);
    }
}

const number = new Calculator(new Calculation(5));
number.execute('sum', 11).execute('diff', 8).execute('mult', 3).execute('div', 2).showArch();


