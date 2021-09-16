interface IPhone{
    useLightning();
}

interface Android{
    useTypeC();
}

class SomeIPhone implements IPhone{
    useLightning(){
        console.log('Использовать lightning разъём');
    }
}

class AndroidPhone implements Android{
    useTypeC(){
        console.log('Использовать Type-C');
    }
}

class LightningToTypeCAdapter implements IPhone{
    androidDevise: Android;

    constructor(android: Android){
        this.androidDevise = android;
    }

    useLightning(){
        console.log('Конвертировать lightning, в Type-C');
        this.androidDevise.useTypeC();
    }
}

let android = new AndroidPhone();
let chargeAdapter = new LightningToTypeCAdapter(android);

chargeAdapter.useLightning();
