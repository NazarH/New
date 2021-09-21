interface UserInt{
    send: (message: string, to: any) => any;
    receive: (message: string, from: any) => any;
}

class User implements UserInt{
    constructor(public name: string, public room = null){}

    send = (message: string, to: any = 'all') => this.room.send(message, this, to);
    receive = (message: string, from: any) => console.log(`${from.name} to ${this.name}: ${message}`); 
}

interface ChatInt{
    register: (user: User) => any;
    send: (message, from: any, to: any) => any;
}

class ChatRoom implements ChatInt{
    constructor(public users: object = {}){}

    register(user: User){
        this.users[user.name] = user;
        user.room = this;
    }

    send(message: string, from: any, to: any = 'all'){
        if(to){
            if(to === 'all'){
                console.log(`${from.name} to all: ${message}`);
            } else {
                to.receive(message, from);
            }
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from){
                    this.users[key].reseive(message, from);
                }
            })
        }
    }
}

let user1 = new User('User_1');
let user2 = new User('User_2');
let user3 = new User('User_3');

let room = new ChatRoom();
room.register(user1);
room.register(user2);
room.register(user3);

user1.send('Some message', user2);
user2.send('Some another message', user1);
user3.send('...');

