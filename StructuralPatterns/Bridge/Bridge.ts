interface InpDevices{
    output: object;
}

class Gestures implements InpDevices{
    constructor(public output: any){}

    tap   = (): OutDevices => { return this.output.click();}
    swipe = (): OutDevices => { return this.output.move(); }
    pan   = (): OutDevices => { return this.output.drag(); }
    pinch = (): OutDevices => { return this.output.zoom(); }
}

class Mouse implements InpDevices{
    constructor(public output: any){}

    click = (): OutDevices => { return this.output.click();}
    move  = (): OutDevices => { return this.output.move(); }
    down  = (): OutDevices => { return this.output.drag(); }
    wheel = (): OutDevices => { return this.output.zoom(); }
}

interface OutDevices{
    click:() => any;
    move: () => any;
    drag: () => any;
    zoom: () => any;
}

class ScreenD implements OutDevices{
    click = (): any  => console.log("Screen select");
    move  = (): any  => console.log("Screen move");
    drag  = (): any  => console.log("Screen drag");
    zoom  = (): any  => console.log("Screen zoom in");
}

class AudioD{
    click = (): any => console.log("Sound oink");
    move  = (): any => console.log("Sound waves");
    drag  = (): any => console.log("Sound screetch");
    zoom  = (): any => console.log("Sound volume up");
}

let screenD = new ScreenD();
let audioD  = new AudioD();

let hand  = new Gestures(screenD);
let mouse = new Mouse(audioD);

hand.tap();
hand.swipe();
hand.pinch();

mouse.click();
mouse.move();
mouse.wheel();
