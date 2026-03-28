const person = {

    name: 'sodor uddin',
    age: 25,
    profession: 'devoloper',
    salary: 25000,
    married: true
}

const final = person['profession'];
//bracket notation
console.log(person['salary']);
console.log(person['name']);
console.log(final);

//dot notation
console.log(person.name);
console.log(person.age);

const keyName = 'profession';

console.log(person[keyName]);