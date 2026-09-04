//Palindrome Check: Write a function
// that checks if a string is a palindrome (reads the same backwards and forwards).

function string(str) {
    for(let i= 0 ; i< str.length  ; i++) {
        if(str[i] !== str[str.length - 1]) {
        return false;
      }
    }
    return true;
}
console.log(string("radarr"));


//String Reversal: Write a function that takes a string and returns it reversed without using the 
// built-in array .reverse() method.

let result = "";
function reverse(string) {
    for (let i = string.length - 1; i >= 0; i--) {
     result+=string[i];
} return result
} 

console.log(reverse("hello"));

//Character Counter: Write a function countChar(str, char) 
// that counts how many times a specific character appears in a string.
let counter = 0;
function countChar(str , char) {
    for(let i=0 ; i<str.length ; i++) {
    if(str[i] == char) {
        counter++;
    } 
    } return counter
}
console.log(countChar("aya" , "a"));