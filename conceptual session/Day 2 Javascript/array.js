const numbers = [22, 32, 34, 53, 22];
console.log(numbers);
console.log(numbers[2]);
console.log(numbers.indexOf(34));
console.log(numbers.includes(32));
console.log(numbers.length);

// for changing array value

numbers.push(100);
console.log(numbers);
numbers.pop();
console.log(numbers);
const x =  numbers.pop();
console.log(x);


const fruits = ['Mango', 'Banana', 'Pineapple'];
const flower = ['Rose', 'beli', 'Shapla', 'Golap'];

const akakar = fruits.concat(flower);

console.log(akakar);
console.log(akakar[4]);

const find = fruits.indexOf('aam');
console.log(find);

console.log(fruits.includes('Mango'));

const fools = flower.join('');
console.log(fools);

const string = "Golap,shapla,joba,beli";
const convert = string.split(" ")
console.log(convert);
console.log(typeof convert);
console.log(Array.isArray(convert));

const a = [2,3,4];
console.log(a.join(","));

const flowers = ['Rose', 'beli', 'Shapla', 'Golap', 'krishnocora'];

let slices = flowers.slice(1,4)
console.log(slices);
console.log(flowers.shift());
console.log(flowers);

flowers.unshift('kodom');
console.log(flowers)