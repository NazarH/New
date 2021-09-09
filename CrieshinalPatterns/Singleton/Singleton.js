class Database {
    constructor(data) {
        this.data = data;
        if (Database.exists) {
            return Database.instance;
        }
        Database.instance = this;
        Database.exists = true;
    }
    getData() {
        return this.data;
    }
}
const mongo = new Database('MongoDB');
console.log(mongo.getData()); //MongoDB
const mysql = new Database("MySQL");
console.log(mysql.getData()); //MongoDB
