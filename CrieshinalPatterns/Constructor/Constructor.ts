class Fio{
    constructor(public firstName: string, public midleName: string, public lastName: string){
        this.firstName = firstName;
        this.midleName = midleName;
        this.lastName = lastName;
    }
}

class Adress{
    constructor(public zip: number, public street: string){
        this.zip = zip;
        this.street = street;
    }
}

class AtherInfo{
    constructor(public age: number, public phone: string){
        this.age = age;
        this.phone = phone;
    }
}

class User{
    constructor(public fio: object, public adress: object, public atherInfo: object){
            this.fio = Fio;
            this.atherInfo = AtherInfo;
            this.adress = Adress;
    }
}

let newUser = new User(new Fio('FirstName', 'MidleName', 'LastName'), 
                       new Adress(1111, 'Some street'), 
                       new AtherInfo(23, '88005553535'));