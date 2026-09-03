/*Temperature Converter: Write a function celsiusToFahrenheit(c) 
that converts Celsius to Fahrenheit and returns the result. Formula: (C * 9/5) + 32.*/

function celsiusToFahrenheit(C) {
    return (C * 9/5) + 32;
}
console.log(celsiusToFahrenheit(50));


/*String Emptiness Check: Write an arrow function isEmpty(str) that returns true 
if a string is empty or contains only spaces, and false otherwise.*/


const isEmpty1=(str) => {

    for(let i=0 ; i<str.length ; i++) {
        if(str[i] != " ") {
            return false;
        }
    }return true;
}
console.log(isEmpty1("aya mojahid"));
console.log(isEmpty1(" "));


//Methode 2
console.log("methode é pour exo 2")
const isEmpty= (str) =>str=="" || str==" " || str=="  " ? true    : false     ;

const displayCharacters=(str) => {
 
    if (isEmpty(str)){
     console.log("the string is empty")
     return 
    }

    for(let i=0 ; i<str.length ; i++) {
        console.log(str[i]);
    } 
}
displayCharacters("");
displayCharacters("aya mojahid");

//EXO 3 Factorial Calculator: Write a function factorial(n) that uses 
// a loop inside it to calculate and return the factorial of n.

let stock=1;
function factorial(n) {
    for(let i=1 ; i<=n ; i++) {
        stock= stock*i;
        
    }
    return stock;
} 
console.log(factorial(5));