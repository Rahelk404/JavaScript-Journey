const sentence = 'I want to be an devoloper';
let reverse = '';

for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}

console.log(reverse);

for (let i = 0; i < sentence.length; i++){
    console.log(i);
    console.log(sentence[i]);
}

// shortcut

const reversed = sentence.split('').reverse().join('');
console.log(reversed);