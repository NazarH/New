type Cars = {
    type: string,
    model: string,
    color: string,
    owner: string
};

const Сar: Cars = {
    type: 'type',
    model: 'model',
    color: 'color',
    owner: 'name'
}

const bmw = Object.create(Сar, {
    type:  {value: 'SUV'}, 
    model: {value: 'X5'}, 
    color: {value: 'Black'}, 
    owner: {value: 'Some Simple Man'}
})

console.log(bmw.owner);