class Gestures {
    constructor(output) {
        this.output = output;
        this.tap = () => { return this.output.click(); };
        this.swipe = () => { return this.output.move(); };
        this.pan = () => { return this.output.drag(); };
        this.pinch = () => { return this.output.zoom(); };
    }
}
class Mouse {
    constructor(output) {
        this.output = output;
        this.click = () => { return this.output.click(); };
        this.move = () => { return this.output.move(); };
        this.down = () => { return this.output.drag(); };
        this.wheel = () => { return this.output.zoom(); };
    }
}
class ScreenD {
    constructor() {
        this.click = () => console.log("Screen select");
        this.move = () => console.log("Screen move");
        this.drag = () => console.log("Screen drag");
        this.zoom = () => console.log("Screen zoom in");
    }
}
class AudioD {
    constructor() {
        this.click = () => console.log("Sound oink");
        this.move = () => console.log("Sound waves");
        this.drag = () => console.log("Sound screetch");
        this.zoom = () => console.log("Sound volume up");
    }
}
let screenD = new ScreenD();
let audioD = new AudioD();
let hand = new Gestures(screenD);
let mouse = new Mouse(audioD);
hand.tap();
hand.swipe();
hand.pinch();
mouse.click();
mouse.move();
mouse.wheel();
