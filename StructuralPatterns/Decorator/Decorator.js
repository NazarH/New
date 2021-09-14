class Server {
    constructor(ip, port, location) {
        this.ip = ip;
        this.port = port;
        this.location = location;
    }
    url() {
        return `https://${this.ip}:${this.port}`;
    }
    info() {
        this.array.push(this.ip, this.port, this.location);
        return this.array;
    }
}
function decoratorAWS(server) {
    this.aws = true;
    this.awsHttpsPort = 443;
    this.locations = ['USA', 'Canada', 'Europe', 'China'];
    server.setLocation = () => {
        let count = 0;
        this.locations.forEach(element => {
            if (element === server.location) {
                count++;
            }
            ;
        });
        if (count === 0) {
            this.aws = false;
        }
        else {
            count = 0;
        }
        ;
    };
    server.awsInfo = () => {
        return `AWS is ${this.aws}`;
    };
    return server;
}
let s1 = decoratorAWS(new Server('12.34.56.78', '8080', 'USA'));
s1.setLocation();
console.log(s1.awsInfo());
let s2 = decoratorAWS(new Server('12.34.56.78', '8080', 'Africa'));
s2.setLocation();
console.log(s2.awsInfo());
