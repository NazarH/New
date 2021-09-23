class User {
    constructor(name, room = null) {
        this.name = name;
        this.room = room;
        this.send = (message, to = 'all') => this.room.send(message, this, to);
        this.receive = (message, from) => console.log(`${from.name} to ${this.name}: ${message}`);
    }
}
class ChatRoom {
    constructor(users = {}) {
        this.users = users;
    }
    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }
    send(message, from, to = 'all') {
        if (to === 'all') {
            console.log(`${from.name} to all: ${message}`);
        }
        else {
            to.receive(message, from);
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
