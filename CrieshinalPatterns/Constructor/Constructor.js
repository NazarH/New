class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    getUrl() {
        return `https://${this.ip}:80`;
    }
}
const newServer = new Server('Ukraine', '74.21.21.45');
console.log(newServer.getUrl());
