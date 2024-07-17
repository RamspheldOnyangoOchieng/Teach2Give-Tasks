/*Master Yoda, a renowned Jedi Master from the Star Wars universe, is known
for his unique way of speaking. He often reverses the order of words in his
sentences. For example, instead of saying "I am home" he might say "Home
am I" Design a function that takes a sentence as input and returns a new
sentence with the words reversed in the same order that Master Yoda would
use.*/

//Final touches for the task
let sentence = "Never Get Home late";

function MindToReverseIt(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.reverse();
    return reversedWords.join(" ");
}
console.log("The reverse of" + " " + sentence+" " + "is" +" " + MindToReverseIt(sentence))