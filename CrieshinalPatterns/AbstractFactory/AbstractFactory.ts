interface Descr{
    getDescription: () => any 
}

class WoodenDoor implements Descr{
    getDescription() { console.log('Деревяные двери') }
}

class IronDoor implements Descr{
    getDescription() { console.log('Металические двери') }
}

class Welder implements Descr{
    getDescription() { console.log('Сварщик') }
}

class Carpenter implements Descr{
    getDescription(){ console.log('Плотник') }
}

class WoodenDoorFactory {
    makeDoor(){
        return new WoodenDoor()
    }

    makeFittingExpert(){
        return new Carpenter()
    }
}

class IronDoorFactory {
    makeDoor(){
        return new IronDoor()
    }

    makeFittingExpert(){
        return new Welder()
    }
}

let woodenFactory = new WoodenDoorFactory();
let door = woodenFactory.makeDoor();
let expert = woodenFactory.makeFittingExpert();
door.getDescription();
expert.getDescription();

let ironFactory = new IronDoorFactory()
let door2 = ironFactory.makeDoor()
let expert2 = ironFactory.makeFittingExpert()
door.getDescription()  
expert.getDescription() 