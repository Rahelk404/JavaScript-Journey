const subject = 'Chemistry';
const book = 'chemistry';

if (subject.toLocaleLowerCase() === book.toLocaleLowerCase()) {
    console.log('Okay');
} else {
    console.log('error');
}

const bottle = 'water';
const liquid = 'water ';

if (bottle.trim() === liquid.trim()) {
    console.log('Its Okay');
} else {
    console.log('Its an Error');
}

const address = 'andorkillah';
const part = address.slice(2,7);
console.log(part);

const sentence = 'I am good hardworking Person';
console.log(sentence.split(' '));

const realFriends = 'Rahim,Kahim,Tahim,Dahim,Ladim';
const friends = realFriends.split(',');
console.log(friends);