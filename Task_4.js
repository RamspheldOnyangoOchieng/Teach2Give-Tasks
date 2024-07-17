/*Design a function that determines whether a given string is a pangram. A
pangram is a sentence or phrase containing every letter of the alphabet at
least once. Punctuation and case are typically ignored. For example, the
string "The quick brown fox jumps over the lazy dog" is a pangram, while
"Hello, world!" is not.*/
    // Declaring Variables
/*let i;

console.log("Alphabets form (a-z) are:");

// Using for loop for (A-Z):
for (i = 65; i <= 90; i++) {
	console.log(String.fromCharCode(i));
}

console.log("Alphabets from (a-z) are:");

// Using for loop for (a-z):
for (i = 97; i <= 122; i++) {
	console.log(String.fromCharCode(i));
}*/
const testPangram=(originalString)=>{
string =originalString.toLowerCase();
let alphabet = ' ';
for (let i = 0; i < 26; i++) {
    alphabet += String.fromCharCode(i + 97);
}
return alphabet.split('').every(char=>string.includes(char));

};
const Str1="Never give up forever.Enjoy your life and do your best since half knowledge says I am not enough to quote how extremely important focus is and even gazing the azure needs a background reason why it should be done."
const Str2="The way is always rough"
console.log(`${Str1}->${testPangram(Str1)}`);
console.log(`${Str2}->${testPangram(Str2)}`);