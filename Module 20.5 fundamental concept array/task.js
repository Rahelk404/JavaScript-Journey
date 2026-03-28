const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const rev_color = [];

for(const color of colors){
    rev_color.unshift(color)
}

// console.log(rev_color);

const numbers = [12, 98, 5, 41, 23, 78, 46];
let num = [];
for(let i = 0; i < numbers.length; i ++){
    
    if(numbers[i] % 2 === 0){
        num.push(numbers[i])
    }
}

console.log(num);

const data =  ['Tom', 'Tim', 'Tin', 'Tik'];

let concate = data.join('')
let final = Array(concate)

console.log(concate);
console.log(final);

const statement = 'I am a hard working person';

function reverseword(statement){
    return statement.split(' ').reverse().join(' ')
}

const output = reverseword(statement)
console.log(output);
