interface News{
    notifyAll();
    setNews(text: string);
    register(observer: User);
    unregister(observer: any);
}

class AutoNews implements News{
    constructor(public news: string = '',
                public action: any[] = []){}

    setNews(text: string){
        this.news = text;
        this.notifyAll();
    }

    notifyAll(){
        return this.action.forEach(subs => subs.inform(this));
    }

    register(observer: User){
        this.action.push(observer);
    }

    unregister(observer: any){
        this.action = this.action.filter(el => !(el instanceof observer));
    }
}

class User{
    constructor(public name: string){}

    inform(message){
        console.log(`${this.name} сповіщений(на) про ${message.news}`);
    }
}

let autoNews = new AutoNews();
let user1 = new User('SomeUser');
let user2 = new User('SomeUser2');

autoNews.register(user1);
autoNews.register(user2);

autoNews.setNews('Якась цікава новина');





