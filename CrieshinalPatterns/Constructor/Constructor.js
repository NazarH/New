class Fio {
    constructor(firstName, midleName, lastName) {
        this.firstName = firstName;
        this.midleName = midleName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.midleName = midleName;
        this.lastName = lastName;
    }
}
class Adress {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
        this.zip = zip;
        this.street = street;
    }
}
class AtherInfo {
    constructor(age, phone) {
        this.age = age;
        this.phone = phone;
        this.age = age;
        this.phone = phone;
    }
}
class User {
    constructor(fio, adress, atherInfo) {
        this.fio = fio;
        this.adress = adress;
        this.atherInfo = atherInfo;
        this.fio = Fio;
        this.atherInfo = AtherInfo;
        this.adress = Adress;
    }
}
let newUser = new User(new Fio('FirstName', 'MidleName', 'LastName'), new Adress(1111, 'Some street'), new AtherInfo(23, '88005553535'));
