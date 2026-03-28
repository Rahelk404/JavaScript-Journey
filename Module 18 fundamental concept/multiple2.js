const salary = 25000;
const isBcs = true;
const hasCar = false;
const height = 66;

if((salary > 25000 && height >65) || isBcs == true && hasCar == true){
    console.log('allowed')
}
else{
    console.log('reject')
}

if((salary > 25000 || height >65) && isBcs == true || hasCar == true){
    console.log('allowed')
}
else{
    console.log('reject')
}