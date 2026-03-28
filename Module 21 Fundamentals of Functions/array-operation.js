/**
 * Objective: write a function to give me the sum of all numbers in an Array 
 * Step 1:  declare a function;
 * step 2: call check whether the function is called properly;
 * step 3: set a parameter;
 * step 4: pas the parameter(s), check whether parameter is passed in a proper format;
 * step 5: do the function tasks (step by step)
*/

function numberOfArray(number) {
    let sum = 0;
    for (let item of number) {
        console.log(item);
        sum = sum + item;
    }
    return sum;
}

const number = [2, 4, 8, 9, 4, 2];
const sum = numberOfArray(number);
console.log("Number of this item:", sum);


function addOne(numb){
    let sum = 0;
    for(let item of numb){
        console.log(item);
        sum = sum + item;
    }
    return sum;
}

const numb =  [2, 5, 8, 3, 10, 1];
const sums = addOne(numb)
console.log('sum of this number:', sums);

function findTheNum(nums){
    let sum = 0;
    for(let item of nums){
        if(item > 5){
             sum = sum + item;
        }
    }
    return sum;
}

const nums = [3, 7, 1, 9, 4, 6];
const sams = findTheNum(nums);
console.log(sams);