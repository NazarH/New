class Database {
    static instance: any;
    static exists: boolean;

    constructor(public data: string) { 
       if(Database.exists){
           return Database.instance;
       }
       Database.instance = this;
       Database.exists = true;
    }
    
    getData(): string{
       return this.data;
    }
 }
 
 const mongo = new Database('MongoDB');
 console.log(mongo.getData()); //MongoDB
 
 const mysql = new Database("MySQL");
 console.log(mysql.getData()); //MongoDB