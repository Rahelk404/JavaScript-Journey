// let sum = 0;

// for (let i = 91; i <= 129; i += 2) {
//    console.log(i);
//    sum = sum + i;
//    console.log('sum', sum);
// }

// console.log('Total sum', sum);

// let num = 1;
// let sum = 0;

// while(num <= 10){
//     if(num % 2 === 0){
//         console.log(num);
//     }
//     console.log('Sum', sum);
//     num++;
// }

let sum = 0;

for (let i = 91; i <= 129; i++){
   
    if(i % 2 === 0){
        console.log(i);
    }
    sum = sum + i;
    console.log('Total Sum', sum);
}
console.log('Total Sum', sum);

for (let x = 51; x <= 85; x++){
   
    if(x % 2 === 1){
        console.log(x);
    }
    sum = sum + x;
    console.log('single sum:', sum);

    
}

console.log('Total', sum);
