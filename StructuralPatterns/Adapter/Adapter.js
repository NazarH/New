class SomeIPhone {
    useLightning() {
        console.log('Use lightning port');
    }
}
class AndroidPhone {
    useTypeC() {
        console.log('Use Type-C');
    }
}
class LightningToTypeCAdapter {
    constructor(android) {
        this.androidDevise = android;
    }
    useLightning() {
        console.log('Want to use lightning, converting to Type-C');
        this.androidDevise.useTypeC();
    }
}
let android = new AndroidPhone();
let chargeAdapter = new LightningToTypeCAdapter(android);
chargeAdapter.useLightning();
