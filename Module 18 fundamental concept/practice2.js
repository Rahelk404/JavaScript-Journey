const price = 800;
const age = 15;
const student = true;

if (age <= 10){
    console.log('free');
}

// 50% discount
else if(!student){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if(age >= 60){
    const discount = price * 15 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else{
    console.log(price)
}