/**
 * LOOPING Technique
 * 1. for loop
 * 2.while loop
 * 3. do while --> ignore
 * for of --> array loop korar jnno
 * for in --> object loop korar jonno
 * 
*/

const friends = ['Elon', 'bill', 'Mark', 'Waren'];

for (const friend of friends) {
    // console.log(friend);
}

for(let i = 0; i < friends.length; i++){
//     console.log(i);
//    console.log(friends[i]);
}

const numbers = [5, 4, 3,34 ,34 ,32,4453, 434,453 , 322];

for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}

let i = 0;

while(i < friends.length){
    console.log(friends[i]);
    i++
}

let n = 0;

while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}