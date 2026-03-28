let i = 1;
let sum = 0;

while (i <= 1000){
   
    if(i >= 100){
        break
    }
    sum = sum + i;
    i++
    console.log('Sum', i);
    console.log('Total Sum' , sum);
}


for (let i = 1; i <= 100; i++){
    if(i % 4 === 0){
        console.log('title', i);
    }
    sum = sum + i;
    console.log('Total', sum);
}