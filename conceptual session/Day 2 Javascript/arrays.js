const numbers = [0, 1, 2, 3, 4, 5, 9, 20];

console.log(numbers);
console.log(numbers.length);    //array length
console.log(numbers[7]);  //index number

// for adding new element in Array 

numbers.push(21);
numbers.push(22);
console.log(numbers);

// for reserving Array value pop

const x = numbers.pop()

// for removing last element in Array
numbers.pop();
numbers.pop();
console.log(numbers);
console.log(x);

// for concat in Array
const fruits = ["aam", "jaam", "kathal"];
const flowers = ["golap", "sapla", "joba", "joba"];

const akakar = fruits.concat(flowers);
console.log(fruits);
console.log(flowers);
console.log(akakar);

// Index for Array

console.log(akakar[4]);


// for finding Array 

const find = fruits.indexOf("kathal")
console.log(find);

// Includes for using elements find True or false

const flower = ["golap", "sapla", "joba", "joba"];
console.log(flower.includes("krishochura"));
console.log(flower.includes("sapla"));

// Array to string convert && 

const fools = flower.join(" ");
console.log(fools);

// String to array convert
const string = "golap, shapla, joba, beli";
const convert = string.split(",");
console.log(convert);
// for checkig Array
console.log(Array.isArray(convert));

// for dedicated split
const splite = string.split("a");
console.log(splite);

// slice method for array

const flowerss = ["golap", "sapla", "joba", "joba", "Krishnochur"];

const slice = flowerss.slice(0,4)
console.log(slice);

// shift unshift for array

const flowerr = ["golap", "sapla", "joba", "joba", "Krishnochur"];
console.log(flowerr);
flowerr.shift();

console.log(flowerr);

flowerr.unshift("kodom", "gada");
console.log(flowerr);

