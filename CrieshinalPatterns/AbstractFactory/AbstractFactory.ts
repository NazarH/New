interface FurnitureFactory{
    createDoor: () => any;
    chooseWorker: () => any;
}

class WoodenDoorFactory implements FurnitureFactory{
    public createDoor(){
        return new WoodenDoor();
    }
    public chooseWorker(){
        return new Carpenter();
    }
}

class IronDoorFactory implements FurnitureFactory{
    public createDoor(){
        return new IronDoor();
    }
    public chooseWorker(){
        return new Welder();
    }
}

interface Door{}
interface Work{}

class WoodenDoor implements Door{
    public WoodenDoor(){
        console.log("Деревяная дверь готова")
    }
}

class IronDoor implements Door{
    public IronDoor(){
        console.log("Металическая дверь готова")
    }
}

class Carpenter implements Work{
    public Carpenter(){
        console.log("Плотник готов приступить к работе")
    }
}

class Welder implements Work{
    public Welder(){
        console.log("Сварщик готов приступить к работе")
    }
}