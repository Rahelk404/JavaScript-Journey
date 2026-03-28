const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= numbers.length; i++) {
    console.log(i);
}

for (let i = numbers.length; i >= 0; i--) {
    console.log(i);
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let j = 0;

while (j <= number.length) {
    console.log(j);
    j++
}

let k = number.length;

while(k >= 0){
    console.log(k);
    k--
}

// for loop advanced

const name = ['Ahmed', 'Hasan', 'Pasha', 'Jamil', 'Kamil'];

for(let item of name){
    console.log(item);
}

for(let item of name.reverse()){
    console.log(item);
}

// this is nested loop\\

for(let i = 0; i <= 5; i++){
    console.log('hello this I',i);
    for(let j = 0; j <= 5; j++){
        console.log('hello this J', j);
    }
}

// sum of array numbers

const numArray = [1,2,3,4,5];

let sum = 0;

for(let item of numArray){
    sum += item;
}
console.log(sum);

//? complex

const arrayNum = [1,2,3,4,5,6,7,8,9];

let evens = [];

for(let item of arrayNum){
    if(item % 2 === 0){
        evens.push(item)
    }
}

console.log(evens);

// break

const y = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i <= y.length; i++){
    if(y[i] === 5){
        break
    }
    console.log(y[i]);
}

// continue

for(let i = 0; i < y.length; i++){
    if(y[i] === 5){
        continue;
    }
    console.log(y[i]);
}