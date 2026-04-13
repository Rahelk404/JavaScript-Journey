
const students = {
    name: 'sakib khan',
    id: 121,
    address: 'moive cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Amir'],
    movies: [{name: 'no. 1', year: 2010 }, {name: 'King Khan', year: 2015}],
    act: function(){
        console.log("acting Like shaib khan");
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'elon mask',
            country: 'USA'
        }
    }
}

console.log(students.car.manufacturer);
students.act();
console.log(students.act());