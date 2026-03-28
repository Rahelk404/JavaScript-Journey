/**
 * array has some duplicate elements
 * []
*/


const biriyaniKhabo = ['abul', 'kabul', 'babul', 'mokbul', 'abul', 'kabul', 'babul'];
const numbers = [23, 3, 5, 23, 5, 66, 43, 5, 66];

function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique
}

const uniqueArray = noDuplicate(biriyaniKhabo);
console.log(uniqueArray);


