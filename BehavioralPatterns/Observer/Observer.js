class AutoNews {
    constructor(news = '', action = []) {
        this.news = news;
        this.action = action;
    }
    setNews(text) {
        this.news = text;
        this.notifyAll();
    }
    notifyAll() {
        return this.action.forEach(subs => subs.inform(this));
    }
    register(observer) {
        this.action.push(observer);
    }
    unregister(observer) {
        this.action = this.action.filter(el => !(el instanceof observer));
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
    inform(message) {
        console.log(`${this.name} сповіщений(на) про ${message.news}`);
    }
}
let autoNews = new AutoNews();
let user1 = new User('SomeUser');
let user2 = new User('SomeUser2');
autoNews.register(user1);
autoNews.register(user2);
autoNews.setNews('Якась цікава новина');
