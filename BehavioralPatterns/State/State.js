class Light {
    constructor(light) {
        this.light = light;
    }
}
class RedLight extends Light {
    constructor() { super('Червоний'); }
    sign() {
        return 'Стій!';
    }
}
class YellowLight extends Light {
    constructor() {
        super('Жовтий');
    }
    sign() {
        return 'Готуйся...';
    }
}
class GreenLight extends Light {
    constructor() {
        super('Зелений');
    }
    sign() {
        return 'Їдь!';
    }
}
class TrafficLight {
    constructor(states = [], current = '') {
        this.states = states;
        this.current = current;
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ];
        this.current = this.states[0];
    }
    change() {
        const total = this.states.length;
        let index = this.states.findIndex(light => light === this.current);
        if (index + 1 < total) {
            this.current = this.states[index + 1];
        }
        else {
            this.current = this.states[0];
        }
    }
    sign() {
        return this.current.sign();
    }
}
const traffic = new TrafficLight();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();
