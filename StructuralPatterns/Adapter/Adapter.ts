interface IPhone{
    useLightning();
}

interface Android{
    useTypeC();
}

class SomeIPhone implements IPhone{
    useLightning(){
        console.log('Use lightning port');
    }
}

class AndroidPhone implements Android{
    useTypeC(){
        console.log('Use Type-C');
    }
}

class LightningToTypeCAdapter implements IPhone{
    androidDevise: Android;

    constructor(android: Android){
        this.androidDevise = android;
    }

    useLightning(){
        console.log('Want to use lightning, converting to Type-C');
        this.androidDevise.useTypeC();
    }
}

let android = new AndroidPhone();
let chargeAdapter = new LightningToTypeCAdapter(android);

chargeAdapter.useLightning();
