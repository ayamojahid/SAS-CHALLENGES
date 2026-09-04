//Length & Uppercase: Given a string, log its length, and then log the entire string in uppercase.
let string="Aya student"
console.log("nombre est " + string.length)

console.log(string.toUpperCase());

// First & Last Char: Write a function that takes a string and logs its first and last characters.
function FIlas(string) {
    console.log(string[0]);
    console.log(string[string.length-1])
}

FIlas("aya mojahid");

//Word Replacer: Given a sentence "I love apples", 
// use a string method to replace "apples" with "bananas" and log the new sentence.

let sentence="i love apples" 
console.log(sentence.replace("apples" , "bananas"))