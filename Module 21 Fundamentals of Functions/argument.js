function doubleIt (number){
    const double = number * 2;
    console.log(number, double);
}

console.log('i will call the function');
doubleIt(15);
console.log('--------------');
doubleIt(88);
console.log('---------------');
console.log(873);

const number = 55;
doubleIt(number);
const money = 112;

doubleIt(money);


//difference

function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}

const myAge = 20;
const fatherAge = 50;

difference(fatherAge, myAge);