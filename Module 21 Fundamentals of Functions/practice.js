function mysystem(a, b, c, d, e) {
    const totalPrice = a + b + c + d + e;
    const vat = totalPrice * 5 / 100;
    const discount = totalPrice * 10 / 100;
    const total = totalPrice + vat - discount;

    console.log('Total Price of the item:', totalPrice);
    console.log('Vat & Tax:', vat);
    console.log('Discount:', discount);
    console.log('Total', total);
}

// mysystem(250, 430, 500, 200, 100);

console.log('-------------------');

// mysystem(500, 32, 212, 345, 400);


function mySystemX(a, b, c, d, e) {
    const totalPrice = a + b + c + d + e;
    const vat = totalPrice * 15 / 100;
    const coupon = totalPrice * 10 / 100;
    const total = totalPrice + vat - coupon;

    console.log('Total Price of the item:', totalPrice);
    console.log('Vat & Tax:', vat);
    console.log('Discount:', coupon);
    console.log('Total', Number(total.toFixed(3)));
    console.log('----------------');
    console.log('Thank You For Your Shopping');
     console.log('----------------');
}

// mySystemX(5000, 3002, 4327, 5102, 2350);



function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const total = add(43, 45);
console.log(total);

function add2(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const result = add2(44, 32);
console.log(result);


function add3(price1, price2){
    return price1 + price2;
}

console.log(add(44, 43));


function isEven(numbers){
    if (numbers % 2 === 0) {
        return true;
    }

    else{
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(10));

function isOdd(number){
    if (number % 2 === 1) {
        return true;
    } 
    return false;
}

console.log(isOdd(5));
console.log(isOdd(10));