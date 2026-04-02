const jim = 56;
const tim = 89;
const kim = 68;


function maxOf(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

const ultimateMax = maxOf(jim, tim, kim);
console.log("Answer:", ultimateMax);

const max = Math.max(23, 45, 88);
console.log("Max is using Math.max:", max);


function dressQuantity(shirtQuantity, pantQuantity, shoeQuantity) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const shirtTotalPrice = shirtPrice * shirtQuantity;
    const pantTotalPrice = pantPrice * pantQuantity;
    const shoeTotalPrice = shoePrice * shoeQuantity;

    const totalDress = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalDress;
}

const dress = dressQuantity(2, 1, 1);
console.log('Total Dress:', dress);


function layeredDiscountTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    const above300Price = 60;
    const above400Price = 50;

    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }

    else if (quantity <= 200) {
        const first100Total = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }

    else if (quantity <= 300) {
        const first100Total = first100Price * 100;
        const second100Total = second100Price * 100;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }

    else if (quantity <= 400) {
        const first100Total = first100Price * 100;
        const second100Total = second100Price * 100;
        const third100Total = above200Price * 100;
        const remainingQuantity = quantity - 300;
        const remainingTotal = remainingQuantity * above300Price;
        const total = first100Total + second100Total + third100Total + remainingTotal;
        return total;
    }

    else{
        const first100Total = first100Price * 100;
        const second100Total = second100Price * 100;
        const third100Total = above200Price * 100;
        const fourth100Total = above300Price * 100;
        const remainingQuantity = quantity - 400;
        const remainingTotal = remainingQuantity * above400Price;
        const total = first100Total + second100Total + third100Total + fourth100Total + remainingTotal;
        return total;
    }

}

console.log(layeredDiscountTotal(590));



function add(num1, num2){
    const result = num1 +  num2;
    return result;
}

function substract(num1, num2){
    const result = num1 - num2;
    return result;
}

function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

function divide(num1, num2){
    const result = num1 / num2;
    return result;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }

    else if(operation === 'susbtract'){
        return substract(a, b);
    }

    else if(opeartion === 'multiply'){
        return multiply(a, b);
    }
    else if(operation === 'divide'){
        const result = divide(a, b);
        return result;
    }

    else{
        return "Only 'add', 'substract', 'multiply', 'divide', operation is allowed" ;
    }
}


const result = calculator(5 ,66, 'susbtract');
console.log(result);