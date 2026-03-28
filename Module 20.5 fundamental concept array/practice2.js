const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const reverse = numbers.reverse();

// console.log(reverse);

const rev_num = [];

for (const num of numbers) {
    // console.log(num);
    rev_num.unshift(num);
}

// console.log(rev_num);

const rev_numbers = [];

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    rev_numbers.unshift(num)
}
console.log(rev_numbers);

const  rev_dev_numbers =[];

for (let i = numbers.length - 1; i > 0; i--) {
    const nums = numbers[i];
    rev_dev_numbers.push(nums);
}
console.log(rev_dev_numbers);