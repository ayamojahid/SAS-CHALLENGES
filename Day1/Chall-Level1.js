//While Loop Counting: Use a while loop to print the numbers from 1 to 20 in the console.

let number = 1;
while (number <= 20) {
    console.log(number);
    number++;
}

//Sum of First 100 Numbers: Use a for loop to calculate the sum of 
// all numbers from 1 to 100, then log the final total.

console.log("sum numbers");

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("sum = " + sum);

//Multiplication Table: Choose a number (e.g., 5). Use a for loop to print its
//  multiplication table from 1 to 10 (e.g., "5 x 1 = 5", "5 x 2 = 10").

console.log("mul numbers");

let mul = 5;
let stok=1;
for (let j = 1; j <=10 ;j++ ) {
stok=mul*j;
console.log(mul+ "*" + j + "=" +stok);
}
