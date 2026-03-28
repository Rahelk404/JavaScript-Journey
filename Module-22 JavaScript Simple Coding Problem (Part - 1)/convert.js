// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const shuvoHeight = inchToFeet(92);
console.log(parseFloat(shuvoHeight.toFixed(2))); 


function inchToFeet2(inch){
    const feetfraction = inch / 12;
    const feetNumer = parseInt(feetfraction);
    const inchRemaining = inch % 12;
    const result = feetNumer + ' ft ' + inchRemaining + ' inch ';
    return result;
}

const height2 = inchToFeet2(67);
console.log(height2);


// miles to km

function milesToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const kiloresult = milesToKilometer(22);
console.log(kiloresult);

function kilometerToMiles(kilo){
    const miles = kilo * 0.621371;
    const result = 'Miles: ' + miles
    return result;
}

const milesResult = kilometerToMiles(45);
console.log(milesResult);