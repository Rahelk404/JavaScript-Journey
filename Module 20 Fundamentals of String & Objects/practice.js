const school = 'CAMrian school and COLLege';

console.log(school.toLowerCase());
console.log(school.toUpperCase());

const drink = 'water';
const liquid = 'Water';

if (drink.toLowerCase() === liquid.toLowerCase()) {
    console.log('Eat');
} else {
    console.log('not eat');
}

const item = 'book';
const items = '   book   '

if (item.trim() === items.trim()) {
    console.log('You can buy');
} else {
    console.log('You can`t buy');
}


const first = 'abid';
const last = 'navid';

const fullName = first + ' ' + last;
console.log(fullName);

const fullName2 = first.concat(' ').concat(last);
console.log(fullName2);

console.log(fullName.includes('c'));

