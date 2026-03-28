const persons = ['rakib', 'nakib', 'sakib', 'akib', 'dakib'];

const sorted = persons.sort();
console.log(sorted);

/**
 * ********************
 * sort -->
 * ********************
 * 
 * 
 * ********************************
 * 
 * 
 * ascending ---> smaller to larger [1,2,3,4,5,6]
 * descending --> larger to smaller: [6,5,4,3,2,1]
 * 
 * 
 * ********************************
 * 
 */
const numbers = [3, 4, 6, 1, 2, 8, 7, 5];

const sort = numbers.sort()
console.log(sort);

const number = [1, 12, 32, 2, 3, 4, 43, 32];

const sort_asc = [...number].sort(function (a, b) { return a - b })

const sort_dsc = [...number].sort(function (a, b) { return b - a });

console.log(sort_asc);
console.log(sort_dsc);