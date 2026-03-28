const age = 60;
const price = 500;

if (age <= 12){
    console.log('You can eat for free')
}

// for 50% discount
else if(age >= 60){
    const discount = price * 50 / 100;
    const payAmount = price -discount
    console.log(payAmount)
}

// for 10% discount
else if(age >= 50){
    const discount = price * 10 / 100;
    const payAmount = price -discount
    console.log(payAmount)
}

else{
    console.log(price)
}