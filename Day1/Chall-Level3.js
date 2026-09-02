//chall 1 Prime Numbers: Use a loop to find and log all prime numbers between 1 and 50.
//  (A prime number is only divisible by 1 and itself).

for(let i=1 ; i<=50 ; i++) {
let compteur=0;

    for(let j=1 ; j<=i ; j++) {
    if(i % j == 0 ) {
        compteur++
    } 
} if (compteur == 2) {
        console.log("prime number = " + i);
    } }


//chall 2 Right-Angled Triangle: Use nested for loops to draw a right-angled triangle
//  of stars in the console (height of 5).

for(let i =1 ;i<=5 ; i++){
    let ligne="";
for(let j=1 ; j<=i ; j++) {
ligne+="*";
}console.log(ligne)
}

// chall 3 Fibonacci Sequence: Use a loop to print the first 10 numbers of the Fibonacci 
// sequence (0, 1, 1, 2, 3, 5, 8...).

let a=0;
let b=1;
for(let i=1 ; i<=10 ; i++) {
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
}


/*1
12
123
1234
12345
*/
for(let i=1 ; i<=5 ; i++) {
    let ligne="";
    for(j=1 ; j<=i ; j++) {
        ligne+=j;
    } console.log(ligne )
}