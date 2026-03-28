const food = ['aam', 'jaam', 'Kathal', 'Mango', 'banana'];

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < number.length; i++){
    if(number[i] === 5){
        continue;
    }
    console.log(number[i]);
}
