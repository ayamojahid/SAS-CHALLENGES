//Array Basics: Create an array of 3 colors.
//  Add a new color to the end, remove the first color, and log the final array.

let tab=["rouge" , "jaune" , "vert"];
tab.push("ananas");
tab.shift();
console.log(tab);

//Array Sum: Create an array of 5 numbers. Iterate through it with a loop and 
// calculate the total sum.

let sum=[12,2,90];
let s=0;
for(let i=0 ; i<sum.length ;  i++) {
    s+=sum[i];
}
console.log(`la somme est ${s}`)


//Element Existence: Write a function that takes an array and a value, returning 
// true if the value exists in the array and false otherwise (without using .includes()).