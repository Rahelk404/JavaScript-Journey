function fourParaMulti(a, b, c, d) {
    return a * b * c * d;
}

const fourParaMultiFinal = fourParaMulti(5, 3, 6, 7);
// console.log(fourParaMultiFinal);

function evenOdd(number) {
    if (number % 2 === 1) {
        return number * 2;
    }
    else {
        return number / 2;
    }
}
const number = 40;
const finalResult = evenOdd(number);
// console.log(finalResult);


 function makeAvg(arr, size) {
    let sum = 0;
    for (let number of arr) {
        sum = sum + number;
    }
    return sum / size;
}
const numberX = [23, 12, 14, 45, 31];
const size = numberX.length;
    
const result = makeAvg(numberX, size);
console.log(result);

