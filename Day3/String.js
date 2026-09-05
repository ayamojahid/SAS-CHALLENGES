/*C'est quoi une String ?
Une String est simplement du texte.*/

let nam="aya";
console.log(nam);

//pour afficher texte et nombre
let name1="aya mojahid" ;
let name2="aya mojahid" ;
let age =25;

console.log(`nom est ${name1} et jai ${age}`)

//.length permet de connaître la longueur d'une string.

console.log(name1.length);

//toUpperCase() Transforme tout en MAJUSCULES.
console.log(name1.toUpperCase());

//toLowerCase() Transforme tout en minuscules.

console.log(name1.toLowerCase());

console.log("exple")
//exemple
let answer="ok";
if (answer.toUpperCase()=="OK") {
    console.log("acceptable")
}

//.trim() .trim() enlève les espaces au début et à la fin.

let a="         aya              "
console.log(a.trim())

//. .includes() Permet de vérifier si une string contient quelque chose.
console.log(a.includes("a"))

//.startsWith() Vérifie si une string commence par quelque chose.

console.log(a.startsWith("a"));
console.log(a.startsWith("m"));
console.log(a.startsWith(" "));

//.endsWith() Vérifie si une string commence par quelque chose.
let b="javascript"

console.log(b.endsWith("t"));
console.log(b.endsWith("g"));

// .slice()   .slice() permet de prendre une partie d'une string.

let text = "JavaScript";

console.log(text.slice(0, 4));

/*  En JavaScript, slice(0, 4) prend les caractères de l'index 0 jusqu'à l'index 4
 mais sans inclure l'index 4.
Regarde :
pourquoi? J a v a S c r i p t
          0 1 2 3 4 5 6 7 8 9    */
            

//slice(2) signifie : commence à l'index 2 et va jusqu'à la fin.

console.log(text.slice(2));

//Ça veut dire les 3 derniers caractères.
text.slice(-3); // "ipt"


//  .replace() Permet de remplacer du texte.
let k="aya mojahid";
console.log(k.replace("aya" , "salma"))

//  .split() Très important. .split() permet de transformer une string en array.
let fruits= "banana , orange , kiwi" 
console.log(fruits.split());

// Accéder à un caractère On peut récupérer un caractère avec son index.
let prenom="mojahid";
console.log(prenom[0]);


//join() fait l'inverse de split(). join() sert à réunir les éléments d'un tableau
let words = ["Aya", "Mojahid"];
words.join(" "); //affiche "Aya Mojahid"

