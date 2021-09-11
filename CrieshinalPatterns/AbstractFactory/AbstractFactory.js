class WoodenDoorFactory {
    createDoor() {
        return new WoodenDoor();
    }
    chooseWorker() {
        return new Carpenter();
    }
}
class IronDoorFactory {
    createDoor() {
        return new IronDoor();
    }
    chooseWorker() {
        return new Welder();
    }
}
class WoodenDoor {
    WoodenDoor() {
        console.log("Деревяная дверь готова");
    }
}
class IronDoor {
    IronDoor() {
        console.log("Металическая дверь готова");
    }
}
class Carpenter {
    Carpenter() {
        console.log("Плотник готов приступить к работе");
    }
}
class Welder {
    Welder() {
        console.log("Сварщик готов приступить к работе");
    }
}
