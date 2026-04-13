function findLargest(values) {

    if (!Array.isArray(values)) {
        return "provide an array";
    }
    else {
        let max = values[0];
        for (let i = 1; i < values.length; i++) {

            if (typeof values[i] !== "number") {
                return "all value should be a number";
            }
            else {
                if (values[i] > max) {
                    max = values[i];
                }
            }
        }
        return max;
    }
}




const numbers = [3, 12, 4, 2, false, 53, "2", 5, 6];

console.log(findLargest(numbers));
console.log(findLargest("rr"));