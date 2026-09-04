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


// Existence d’un élément : Écrivez une fonction qui prend un tableau et une valeur, en retournant 
// si la valeur existe dans le tableau et autrement (sans utiliser ).truefalse.includes()


function element(array , value) {
for(let i =0 ; i<array.length ; i++) {
    if(array[i]==value) {
        return true
    }
       
}  
 return false
}
console.log(element([12 ,5 , 9 , 6 ] , 8 ))