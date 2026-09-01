//LEVEL 1

//Challenge1 :Age Logger: Declare a variable age and assign a number to it. Log to the console: 
// "You are [age] years old."

let age = 26;
console.log("You are " + age + " years old ");

//challenge2 :Declare a variable temperature. If the temperature is strictly greater than 30, 
// log "It's hot outside!". Otherwise, log "The weather is nice.

let temperature = 23;
if (temperature > 30) {
    console.log("It's hot outside!")
} else { console.log("The weather is nice") }


//CHALLENGE 3
/* Declare a variable number.Use the modulo operator( % ) and an
if / else statement to check if the number is even or odd, and log the result.*/

let number = 13;

if (number % 2 == 0) {
    console.log("The number is even (Pair)")
} else {
    console.log("the number is odd (impair)")
}

//LEVEL 2

//CHALLENGE 1 LEVEL 2 Declare a variable score (0-100). Use if/else if/else 
// statements to log "A" for 90-100, "B" for 80-89, "C" for 70-79, 
// and "F" for anything below 70.

let score = 60;
if (score >= 90 && score <= 100) {
    console.log("A")
} else if (score >= 80 && score <= 89) {
    console.log("B")
} else if (score >= 70 && score <= 79) {
    console.log("C")
} else {
    console.log("F")
}

//CHALLENGE 2 Declare three number variables. Write conditions to find and 
// log the largest of the three numbers without using Math.max.

/*let N1 = 1299;
let N2 = 452535;
let N3 = 20256;
let result = Math.max(N1, N2, N3);
console.log("The largest number is " + result); */

let N1 = 1299;
let N2 = 452535;
let N3 = 20256;

if (N1 > N2 && N1 > N3) {
    console.log("The largest number is " + N1);
} else if (N2 > N1 && N2 > N3) {
    console.log("The largest number is " + N2);
} else {
    console.log("The largest number is " + N3);

}






//challenge 3 Declare a year variable. Write a condition to check if it's a leap year (divisible 
// by 4 AND NOT divisible by 100, UNLESS it's divisible by 400). Log true or false.

let year = 2024;
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    console.log(true);
} else {
    console.log(false);
}



//Level 3 (Advanced)

/* Chalenge 1 Basic Calculator: Declare variables num1, num2, and operator
 (a string like "+", "-", "*", "/"). Use a switch statement
 to perform the correct math operation and log the result. Handle division by zero.*/

let num1 = 18;
let num2 = 13;

let operation = "+";
switch (operation) {
    case "+":
        console.log("sommes est " + (num1 + num2))
        break;
    case "-":
        console.log("soustraction est " + (num1 - num2))
        break;
    case "*":
        console.log("le produit est " + (num1 * num2))
        break;

    case "/":
        console.log("le quotient est " + (num1 / num2))
        break;
    default:
        console.log("Aucun choix trouvee")
}

/* challenge 2 Valid Triangle: Declare three variables representing the angles of a triangle. Check if they 
form a valid triangle (all three add up to exactly 180, and no angle is 0 or less). */


let ang1 = 120;
let ang2 = 40;
let ang3 = 20;

if ((ang1 + ang2 + ang3 === 180) && (ang1 > 0 && ang2 > 0 && ang3 > 0)) {
    console.log("Triangle is valid")
} else { console.log("triangle not valid") }


/* Challenge 3 BMI Calculator: Declare variables for weight (kg) and height (m). 
Calculate the BMI(weight / (height * height)).Log the BMI along with a category:
  "Underweight" (<18.5), "Normal" (18.5-24.9), or "Overweight" (>=25).  */

let weight = 75;
let height = 163;

let BMI = (weight / (height * height));
if (BMI < 18.5) {
    console.log("Underweight")
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal")
} else {
    console.log("Overweight")
}