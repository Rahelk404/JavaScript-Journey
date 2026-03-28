/**
 * for (starting value, end condition, increament or decreament) {
 
         }
*/

for (let i = 0; i <= 5; i++){
    console.log("Rahel", i);
}

const flowerr = ["golap", "sapla", "joba", "joba", "Krishnochur"];

for (let i = 0; i < flowerr.length; i++){
    console.log(flowerr[i]);
}

//for loop reverse

for (let i = flowerr.length - 1; i >= 0; i--){
    console.log(flowerr[i]);
}



// do while looop


const fruits = ['aam', 'jaam', 'kathal', 'tormuj'];

let i = 0;

while( i < fruits.length){
    console.log(fruits[i]);
    i++;
}
 
//for reverse while loop


let j = flowerr.length-1;

while( j >= 0){
    console.log(flowerr[j]);
    j--
}


// for loop advanced version

const flower = ['Rose', 'Beli', 'Lavender', 'Joba', 'Rajnigondha'];

for(let item of flower){
    console.log(item);
}

// for loop advanced version (reverse)

for (let item of flower.reverse()){
    console.log(item);
}


// break 

const x = [1,2,3,4,5,6,7,8,9,];

for(let i = 0; i < x.length; i++){
    if(x[i] === 5){
        break;
    }
    console.log(x[i]);
}

// continue 

for(let i = 0; i < x.length; i++){
    if(x[i] === 5){
        continue;
    }
    console.log(x[i]);
}

