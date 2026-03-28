function evenSizedString(str){
    const size = str.length;
    if(size % 2 === 0){
        console.log('even size');
        return true
    }
    else{
         console.log('odd size');
         return false;
    }
}

console.log(evenSizedString("Bangladesh"));
console.log(evenSizedString("America"));
console.log(evenSizedString("Great Briten"));


function doubleOrTripple(number, doDouble){
    if(doDouble === true){
        const result = number * number;
        return result;
    }
    else{
        const result = number * number * number;
        return result;
    }
}

console.log(doubleOrTripple(10, true));
console.log(doubleOrTripple(10, false));

function numberOfElements(number){
    const len = number.length;
    return len;
}

console.log(numberOfElements([2,3,46,2,12,3,454,7543,23]));

const person = {
    name: "Rahim" ,
    age: 30
}

function getAge(person){
    const age = person.age;
    return age;
}

console.log(getAge(person));  