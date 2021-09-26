class Driver {
    constructor(command) {
        this.command = command;
    }
    execute() {
        this.command.execute();
    }
}
class Engine {
    constructor(state = false) {
        this.state = state;
    }
    on() {
        this.state = true;
    }
    off() {
        this.state = false;
    }
}
class OnStartCommand {
    constructor(engine) {
        this.engine = engine;
    }
    execute() {
        this.engine.on();
    }
}
class SwitchOffCommand {
    constructor(engine) {
        this.engine = engine;
    }
    execute() {
        this.engine.off();
    }
}
let engine = new Engine();
let onStartCommand = new OnStartCommand(engine);
let driver = new Driver(onStartCommand);
driver.execute();
console.log(engine.state);
