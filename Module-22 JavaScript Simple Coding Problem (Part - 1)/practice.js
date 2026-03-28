
//------------ Quiz -----------
for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
  	// console.log(i);
   }, 100);
}

//------------ Practice ---------


function celsiusToFahrenheit(temperature){
    const celsius = temperature * 1.8;
    const fahrenheit = celsius + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(40));

function cToF(temp){
    const fahrenheit = (temp * 1.8) + 32;
    return Number(fahrenheit.toFixed(2));
}

console.log(cToF(40));


const  numbers = [5,6,11,12,98, 5];


function counting(array, find){
    let count = 0;
    for (const item of array) {
        if (item === find) {
            count++;
        }
    }
    return count;
}

console.log(counting(numbers, 12));


function findVowel(str){
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const foundVOwel = [];

    for (const char of str) {
        if (vowel.includes(char)) {
            foundVOwel.push(char);
        }
    }
    return foundVOwel;
}

console.log(findVowel('hello bangladesh, what happend in the world'));


function longWordStr(str){
    let longestWord = "";
    const longerWord = str.split(" ");
    for (const item of longerWord) {
        if (item.length > longestWord.length) {
            longestWord = item;
        }
    }
    return longestWord;
}

console.log(longWordStr('I am learning Programming to become a programmer'));



function shortestWord(str){
   const word = str.split(" ");
   let shortWord = word[0];

   for (const item of word) {
    if (item.length <= shortWord.length && item.includes('a')) {
        shortWord = item;
    }
   }
   return shortWord;
}

console.log(shortestWord("I am learning Programming to become a programmer"));

let x = Math.floor(Math.random() * 11) + 10;

console.log(x);

