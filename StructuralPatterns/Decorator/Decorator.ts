interface ServInterface{
    ip: string,
    port: string,
    location: string,
    url(): string,
    info(): []
}

class Server implements ServInterface{
    array: any;

    constructor(public ip: string, public port: string, public location: string){}

    url(): string{
        return `https://${this.ip}:${this.port}`;
    }

    info(){
        this.array.push(this.ip, this.port, this.location);
        return this.array;
    }
}

function DecoratorAWS(server){
    this.aws = true;
    this.awsHttpsPort = 443;
    this.locations = ['USA', 'Canada', 'Europe', 'China']; 
    server.setLocation = () => {
        let count = 0;
        this.locations.forEach(element => {
            if(element === server.location){
                count++;
            };
        });
        if(count === 0){
            this.aws = false;
        } else {
            count = 0;
        };
    };

    server.awsInfo = () => {
        return `AWS is ${this.aws}`;
    };

    return server;
}

let s1 = DecoratorAWS(new Server('12.34.56.78', '8080', 'USA'));
s1.setLocation();
console.log(s1.awsInfo());

let s2 = DecoratorAWS(new Server('12.34.56.78', '8080', 'Africa'));
s2.setLocation();
console.log(s2.awsInfo());



