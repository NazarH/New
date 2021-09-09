class Server {
    constructor(public name: string, public ip: string){}

    getUrl(): string{
        return `https://${this.ip}:80`;
    }
}

const newServer = new Server('Ukraine', '74.21.21.45');
console.log(newServer.getUrl());