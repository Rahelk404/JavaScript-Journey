const person = {

    name: 'sodor uddin',
    age: 25,
    profession: 'devoloper',
    salary: 25000,
    married: true,
    'fav place': ['Sylhet', 'Sunamganj', 'Dhaka', 'Barishal']
}

person.age = 30;

const placeName = person['fav place'];
const keyName = 'profession'
let works = person[keyName]
works = 'devops'

delete person.name;
console.log(person);
console.log(placeName);
console.log(person[keyName]);
console.log(works);
