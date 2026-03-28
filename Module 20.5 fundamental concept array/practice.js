const friends = ['mark', 'Bill', 'waren', 'elon'];

for (const friend of friends) {
    // console.log(friend);
}

for (let i = 0; i < 10; i++) {
    console.log(friends[i]);
}

for (let i = 0; i < friends.length; i++) {
    console.log(i);
    console.log(friends[i]);
}

const numbers = [21, 12, 24, 453, 543, 53, 21, 53]

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

let i = 0;

while (i < friends.length){
    console.log(friends[i]);
    i++
}

let n = 0;

while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}