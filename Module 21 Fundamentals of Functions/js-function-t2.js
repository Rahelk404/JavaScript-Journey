function fourParamMulti(a, b, c, d) {
    return a * b * c * d;
}

const result = fourParamMulti(2, 4, 7, 1);
console.log(result);

function evenOdd(number) {
    if (number % 2 === 0) {
        return number * number;
    }
    else {
        return number / 2;
    }
}

const result2 = evenOdd(50);
console.log(result2);

function makeAvg(arr, size) {
    let sum = 0;
    for (number of arr) {
        sum = number + sum;
    }
    return sum / size
}

const valuex = [1, 2, 4, 5, 6, 7, 8, 4, 3];
const size = valuex.length;

const final3 = makeAvg(valuex, size);
console.log(Number(final3.toFixed(2)));

function makeAvgg(arr) {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum / arr.length;
}

const Numbx = [2, 3, 54, 6, 3, 2];
const final4 = makeAvgg(Numbx);
console.log(Number(final4.toFixed(99)));

