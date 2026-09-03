//Math Callback: Write a higher-order function calculate(a, b, operation) where operation is a
//  callback function.  Call it twice passing different arrow functions for addition and subtraction.


function calculate(a, b, operation) {
    return operation(a, b);
}

function afficher(res) {
    console.log("resultat est " + res);
}

afficher(calculate(10, 5, (a, b) => a + b));
afficher(calculate(10, 5, (a, b) => a - b));

//Closure Intro: Write a function createMultiplier(multiplier) that returns a new arrow function.
//  The returned function should take a number and multiply it by the original multiplier.






function createMultiplier(multiplier) {
return (number) => number *multiplier
}

const multiplyBy3 = createMultiplier(3);

console.log(multiplyBy3(10));
console.log(multiplyBy3(5));
console.log(multiplyBy3(5));

//meth 2

function createMultiplier(multiplier) {
    const obj = {
        multiply: (number) => number * multiplier
    };

    return obj.multiply;
}
const multiplyBy4 = createMultiplier(3);
console.log(multiplyBy4(10)); 
console.log(multiplyBy4(5));  

//Custom Filter Outline: Write a function filterOddNumbers(arr, callback) where the callback 
// is an arrow function that returns true if a number is odd. Use it to filter an array.


// function filterOddNumbers(arr , callback) {
//     return arr
// }

// const isOdd = (number) => number % 2 !== 0;
// const x = (arr) => {
//     let result = [];
//     for(let i= 0; i < arr.length; i ++) {
//         if(isOdd(arr[i]) )

//     }
// }
// console.log(filterOddNumbers([1, 2, 3, 4, 5, 6], isOdd));

