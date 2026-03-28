let price = 1100;
const isLeader = false;


// if(price >= 1000){
//     let discount = price * 50 / 100;
//     let payAmount = price - discount;
//     console.log(payAmount)
// }
// else if(!isLeader) {
//     console.log('eat free')
// }
// else{
//     console.log(price)
// }



// price = isLeader === true ? 0 : price;

// price = 500 ? price / 2 : price;

// price >= 1000 ? console.log(payAmount) : console.log(price);

// price = isLeader === true ? 0 : price + 1000;
// price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 100;


if(isLeader){
    price = 0;
}

else{
    price = price + 100;
}

// console.log(price)

// let message = isLeader === true ? 0 : price ;
// console.log(message)

let solver = isLeader === false ? price > 1000? price /2 : 0 : price ;

console.log(solver)


var num1 = 33;
var num2 = 25;
var result;

if (num1 > num2){
    result = num1 * 2;
}
else{
     result = num1 + num2;
}
console.log(result)

// ternary operator

var result = num1 > num2 ? num1 * 2: num1 + num2;
console.log(result)