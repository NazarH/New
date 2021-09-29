class Audi {
    info() {
        return 'Це автомобіль - Audi';
    }
}
class Bmw {
    info() {
        return 'Це автомобіль - BMW';
    }
}
class Tesla {
    info() {
        return 'Це автомобіль - Tesla';
    }
}
class Export {
    exportVisitor(auto) {
        if (auto instanceof Audi) {
            auto.export = `Експортувані дані: ${auto.info()}`;
            return auto.export;
        }
        else if (auto instanceof Bmw) {
            auto.export = `Експортувані дані: ${auto.info()}`;
            return auto.export;
        }
        else if (auto instanceof Tesla) {
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
