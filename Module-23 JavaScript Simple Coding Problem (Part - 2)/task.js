const heights2 = [167, 190, 120, 165, 137];

function getMin(number) {
    let min = number[0];
    for (const num of number) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const lowestNum = getMin(heights2);
console.log(lowestNum);


/* ------  Task 2  ------ */

const nameList = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getLow(names) {
    let low = names[0];
    for (const name of names) {
        if (name.length < low.length) {
            low = name;
        }
    }
    return low;
}

const smallName = getLow(nameList);
console.log(smallName);

/* ------  Task 3  ------ */

function calculateElectronicsBudget(laptop, tablet, mobile) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopTotal = laptopPrice * laptop;
    const tabletTotal = tabletPrice * tablet;
    const mobileTotal = mobilePrice * mobile;

    const total = laptopTotal + tabletTotal + mobileTotal;
    return total;


}

const totalMoneyRequired = calculateElectronicsBudget(2, 3, 5);
console.log(totalMoneyRequired);

/* ------  Task 4  ------ */

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(average){
    let sum = 0;

    for(const avg of average){
        sum = sum + avg.price;
    }

    const totalAvg = sum / average.length;
    return totalAvg;
}
console.log(findAveragePhonePrice(phones));

/* ------  Task 5  ------ */


 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

function employeesSalaryCalculate(salary){
    let sum = 0;

    for (const salaries of salary){
        const multiplyTotal = salaries.experience * salaries.increment;
        const total = multiplyTotal + salaries.starting;
        sum = sum + total;
    }
    return sum;
}

console.log(employeesSalaryCalculate(employees));