class Driver{
    constructor(public command: StartCommands){}

    execute(){
        this.command.execute();
    }
}

class Engine{
    constructor(public state: boolean = false){}

    on(){
        this.state = true;
    }
    off(){
        this.state = false;
    }
}

interface StartCommands{
    execute();
}

class OnStartCommand implements StartCommands{
    constructor(public engine: Engine){}

    execute(){
        this.engine.on();
    }
}

class SwitchOffCommand implements StartCommands{
    constructor(public engine: Engine){}

    execute(){
        this.engine.off();
    }
}

let engine = new Engine();
let onStartCommand = new OnStartCommand(engine);
let driver = new Driver(onStartCommand);

driver.execute();
console.log(engine.state);
