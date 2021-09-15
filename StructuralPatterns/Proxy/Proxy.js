;
class LabDoor {
    open() {
        console.log('Відкрити двері лабораторії');
    }
    close() {
        console.log('Закрити двері лабораторії');
    }
}
;
class ProxySecurity {
    constructor(door) {
        this.door = door;
    }
    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        }
        else {
            console.log('У доступі відмовлено');
        }
    }
    authenticate(password) {
        return password === '357';
    }
    close() {
        this.door.close();
    }
}
;
const door = new ProxySecurity(new LabDoor());
door.open('111');
door.open('357');
door.close();
