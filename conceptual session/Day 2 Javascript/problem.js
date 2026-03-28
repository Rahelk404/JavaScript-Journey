// sum of array numbers

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let item of numbers) {
    sum += item;

}

console.log(sum);


//? for complex

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evens = [];
for (let items of number){
    if (items % 2 === 0){
        evens.push(items)
    }
}

console.log(evens);