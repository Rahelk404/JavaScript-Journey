// basic function

function printName(name) {
    console.log('My name is', name);
}

printName('rahel');
printName('Khan');


function printDetails(name, age, address) {
    console.log(`My name is ${name}. My age is ${age}. I live in ${address}.`);
}

printDetails("Rahel", 23, "Sylhet");


function add(x, y) {
    const total = x + y;
    return total;
}


console.log(add(4, 5));
const z = add(40, 6);
console.log(z);

function giveNumber() {
    console.log("inside function:", 5);
    return 5;
}

const x = giveNumber();
console.log("outside function:", x);