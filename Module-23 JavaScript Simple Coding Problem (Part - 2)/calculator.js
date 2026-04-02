function add(num1, num2){
    return num1 + num2;
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
        const result = add(a, b);
        return result;
    }

    else if(operation === 'substract'){
        const result = substract(a, b);
        return result;
    }

    else if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }

    else if(operation === 'divide'){
        const result = divide(a, b);
        return result;
    }

    else{
        return "Only 'add', 'substract', 'multiply', 'divide' operation is allowed." ;
    }
}


const result = calculator(5,7)
console.log(result);