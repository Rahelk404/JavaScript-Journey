const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

const finalColor = colors["golden rod"];
console.log(finalColor);

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.passengerCapacity = 5;
console.log(car);

//task 3

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

const finalResult = student.physics;
console.log(finalResult);

let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const mainProperty = Object.keys(students).length;
console.log(mainProperty);

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
