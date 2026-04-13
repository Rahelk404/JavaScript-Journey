function printDetails(name, age, address) {
    const details = `My name is: ${name}. My age is: ${age}. My address is: ${address}`;
    return details;
}

const info = printDetails("Rahel Khan", 23, "Sylhet");
//console.log(info);


function calculateTax(income, expenses) {
    if (typeof income !== 'number'|| typeof expenses !== 'number' || expenses < 0 || income < 0 || income < expenses) {
        return "Invalid Input"
    } else{
        const totalIncome = income - expenses;
        const tax = totalIncome * 0.20;
        return tax;
    }
}

console.log(calculateTax(7000, 7000));