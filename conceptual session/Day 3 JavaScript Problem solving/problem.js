const x = 5;

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}

checkEvenOdd(x);

function checkEvenOdd2(num) {
    if (num % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
const result = checkEvenOdd2(x);
console.log(result);

function printName(x) {
    for (let i = 1; i <= x; i++){
        console.log("Rahel");
    }
}

printName({name: "Rahel"});
