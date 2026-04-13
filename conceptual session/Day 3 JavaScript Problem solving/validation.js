function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return "thik thak moto number de";
    }
    return x + y;
}

// console.log(add(4));

function details(info){
    if(typeof info !== "object" || !info.name || !info.age){
        return "please provide an object";
    }
    return `my name is : ${info.name}. my age is ${info.age}`;
}

// console.log(details({name: "Rahel", age: 23}));
// console.log(details({name: "Rahel", age: "khan"}));
// console.log(details("xyg"));


function detailsMore(info){
    
    if(typeof info !== "object"){
        return "input should be an object";
    }
    else if(!info.name || !info.age){
        return "object must contain name and age property";
    }
    else if(typeof info.name !== "string" || typeof info.age !== "number"){
        return "name should be a String , Age should be a Number";
    }
    else if(info.age <= 0){
        return "Age should be an positive number";
    }

     return `my name is : ${info.name}. my age is ${info.age}`;
}

console.log(detailsMore({name: "Rahel", age: 26}));
console.log(detailsMore({name: 'Rahel', age: "Khan"}));
console.log(detailsMore({name: 'Rahel',}));
console.log(detailsMore({name: 'Rahel', age: -22}));