function evenNumberOnly(numbers) {
    let evens = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [12, 32, 44, 3, 11, 34];
const even = evenNumberOnly(numbers);
console.log(even);

function evenOnly(numbersAdd) {
    let evens = [];
    for (let number of numbersAdd) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbersAdd = [32, 54, 634, 12, 13]
const evenAdd = evenOnly(numbersAdd);
console.log(evenAdd);


function evenNumber(nmbr) {
    let evens = [];
    for (let number of nmbr) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number)
        }
    }
    return evens;
}

const nmbr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const evenFinal = evenNumber(nmbr);
console.log(evenFinal);