
//Level 2 (Intermediate)
// FizzBuzz: Loop from 1 to 50. Log "Fizz" if a number is a multiple of 3, 
// "Buzz" if a multiple of 5, "FizzBuzz" if both, and the number itself otherwise.


console.log("exo3");
for(let l=1 ; l<=50 ; l++) {
    if(l%3 == 0) {
        console.log(l + " est " + "Fizz")
    } else if (l%5 == 0) {
        console.log(l + " est " + "Buzz")
    }else {
        console.log(l + " est " + "les autre cas")

    }
}

// Count Vowels (Loop): Declare a string variable. Use a for loop to iterate over each 
// character of the string and count how many vowels (a, e, i, o, u) it contains.

console.log("voyel")
let compteur=0
let string ="ayamojahid";
for(let k=0 ;  k < string.length; k++) {
    if(string[k]=="a" || string[k]=="e" || string[k]=="i" || string[k]=="o" || string[k]=="u") {
        compteur++;
    }else ("rien")
}
    console.log(compteur);

    
//Square of Stars: Use nested loops to print a 5x5 square of asterisks (*) in the console.

for(let i=1 ;i<=5; i++) {
 let ligne="";
for(let j=1 ;j<=5; j++) {
 ligne+="*";
}console.log(ligne )
}
