// Фабрика
/*
interface SubSpec{

}

class SimpleMembership{
    constructor(name){
        this.name = name; 
        this.cost = 50;
    }
}

class StandardMembership{
    constructor(name){
        this.name = name; 
        this.cost = 150;
    }
}

class PremiumMembership{
    constructor(name){
        this.name = name; 
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    }

    create(name, type = 'simple'){
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        return member;
    }
}

const factory = new MemberFactory();
const members = [
    factory.create('Nazar', 'simple'),
    factory.create('Alexander', 'standard'),
    factory.create('Sergiy', 'premium')
];

*/


// 123
/*
class LayoutDesigner{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    askQuestion(){
        console.log('Ask about layout skills!');
    }
}

class FrontEndDeveloper{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    askQuestion(){
        console.log('Asking about design patterns!');
    }
}

class Factory{
    takeInterviev(){
        const interviewer = this.makeInterviewer();
        interviewer.askQuestion();
    }
}

class MakingLD extends Factory{
    makeInterviewer(){
        return new LayoutDesigner();
    }
}

class MakingFED extends Factory{
    makeInterviewer(){
        return new FrontEndDeveloper();
    }
}

const newLD = new LayoutDesigner();
newLD.takeInterviev();
const newFED = new FrontEndDeveloper();
newFED.takeInterviev();
*/


/*

interface DevSpec{
    name: string, 
    age: number, 
    gender: string,
    askQuestion(): any,
}

class LayoutDesigner implements DevSpec{
    constructor(public name: string, public age: number, public gender: string){}

    askQuestion(){
       console.log('Ask about layout skills!');
    }
}

class FrontEndDeveloper implements DevSpec{
    constructor(public name: string, public age: number, public gender: string){}

    askQuestion(){
        console.log('Asking about design patterns!');
    }
}

class Factory{

    static list = {
        
    }

    public makeInterviewer(){}

    public takeInterviev(){
        const interviewer: any = this.makeInterviewer();
        interviewer.askQuestion();
    }
}

class MakingLD extends Factory{
    name: string;
    age: number;
    gender: string;
    makeInterviewer(){
        return new LayoutDesigner();
    }
}

class MakingFED extends Factory{
    name: string;
    age: number;
    gender: string;
    makeInterviewer(){
        return new FrontEndDeveloper();
    }
}

const newLD = Object.create(MakingLD).constructor('Name1', 20, 'male');
newLD.takeInterviev();
const newFED = Object.create(MakingFED).constructor('Name2', 21, 'female');
newFED.takeInterviev();

*/

/*
class Server {
    constructor(name, ip){
        this.name = name;
        this.ip = ip;
    }

    getUrl(){
        return `https://${this.ip}:80`;
    }
}

const newServer = new Server('Ukraine', '74.21.21.45');
console.log(newServer.getUrl());
*/

/*
const car =  {
    type: 'Some type',
    model: 'Some model',
    color: 'Some color',
    owner: "Some name",
}

const bmw = Object.create(car, {
    type:  {value: 'SUV'}, 
    model: {value: 'X5'}, 
    color: {value: 'Black'}, 
    owner: {value: 'Some Simple Man'}
})

console.log(bmw.owner);
*/

/*
class Database {
    constructor(data) { 
       if(Database.exists){
           return Database.instance;
       }
       Database.instance = this;
       Database.exists = true;
       this.data = data;
    }
    
    getData(){
       return this.data;
    }
 }
 
 const mongo = new Database('MongoDB');
 console.log(mongo.getData()); //MongoDB
 
 const mysql = new Database("MySQL");
 console.log(mysql.getData()); //MongoDB
*/

/*
function bmwProducer(kind){
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

function sportCarFactory (){
    return new Z4();
}

function familyCarFactory (){
    return new I3();
}

class Z4{
    info(){
        return 'Z4 is a sport car';
    }
}

class I3{
    info(){
        return 'I3 is a family car';
    }
}

const produce = bmwProducer('sport');
const myCar = new produce();

console.log(myCar.info());
*/