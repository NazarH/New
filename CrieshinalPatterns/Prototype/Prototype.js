const car = {
    type: 'type',
    model: 'model',
    color: 'color',
    owner: 'name'
};
const bmw = Object.create(car, {
    type: { value: 'SUV' },
    model: { value: 'X5' },
    color: { value: 'Black' },
    owner: { value: 'Some Simple Man' }
});
console.log(bmw.owner);
