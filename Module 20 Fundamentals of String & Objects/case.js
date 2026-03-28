const school = 'CAMBRIAN SCHOOL  and college';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());


const subject = 'chemistry';
const book = 'Chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('passed');
}

else{
    console.log('Fail');
}

const drink = 'water';
const liquid = 'water ';

if (drink.trim() === liquid.trim()) {
    console.log('i can eat');
} else {
    console.log('I will not eat');
}