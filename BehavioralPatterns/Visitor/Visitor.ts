interface Car{
    info: () => string;
}

class Audi implements Car{
    export: any;

    info(): string{
        return 'Це автомобіль - Audi';
    }
}

class Bmw implements Car{
    export: any;

    info(): string{
        return 'Це автомобіль - BMW';
    }
}

class Tesla implements Car{
    export: any;

    info(): string{
        return 'Це автомобіль - Tesla';
    }
}

class Export{
    exportVisitor(auto: Car): string{
        if(auto instanceof Audi){
            auto.export = `Експортувані дані: ${auto.info()}`;
            return auto.export;
        } else if(auto instanceof Bmw){
             auto.export = `Експортувані дані: ${auto.info()}`;
             return auto.export;
        } else if(auto instanceof Tesla){
            auto.export = `Експортувані дані: ${auto.info()}`;
            return auto.export;
        }
    }
}

let tesla = new Tesla();
let bmw = new Bmw();
let audi = new Audi();

let visit = new Export();

console.log(visit.exportVisitor(tesla));
console.log(visit.exportVisitor(bmw));
console.log(visit.exportVisitor(audi));



