interface Door{
    open(): any;
    close(): any;
};

class LabDoor implements Door{
    open(): any {
        console.log('Відкрити двері лабораторії');
    }
    close(): any {
        console.log('Закрити двері лабораторії');
    }
};

class ProxySecurity{
    constructor(public door: any) {}

    open(password): any{
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('У доступі відмовлено');
        }
    }

    authenticate(password): boolean {
        return password === '357';
    }

    close(): any{
        this.door.close();
    }
};

const door = new ProxySecurity(new LabDoor());
door.open('111'); 
door.open('357');
door.close();