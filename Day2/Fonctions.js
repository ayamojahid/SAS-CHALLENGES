/*C'est quoi une fonction ?

Une fonction, c'est un bloc de code qui fait une tâche précise.

Imagine une machine :

on lui donnes quelque chose → elle travaille → elle peut te donner un résultat.*/

//exemple de fonction
function affiche() {
    console.log("Bonjour");
}
affiche(); // appel de la fonction





//2. Fonction avec paramètres
console.log("2. Fonction avec paramètres");

function afficheNom(nom) {
    console.log("salut " + nom);
}
afficheNom("Aya"); // appel de la fonction avec un paramètre


//3. Plusieurs paramètres
//Une fonction peut avoir plusieurs paramètres.

console.log("3. Plusieurs paramètres");
function add(a ,b) {
    console.log(a + b);
}
add(5, 10); // appel de la fonction avec deux paramètres

//fonction anonyme

// Une fonction anonyme est une fonction sans nom.
// On peut la stocker dans une variable.    

console.log("6. Fonction anonyme");

const maFonction = function() {
    console.log("Je suis une fonction anonyme");
}
maFonction();

//exemple
 function informer(nom , prenom , age) {
    console.log(
    "Bonjour" + " " + nom + " " + prenom + " " + "tu as" + " " + age + "ans"
    ) }

informer("Aya", "Bensalem", 25); // appel
informer("Ali", "Benali", 30); // appel


//Greeting Function: Write a standard function greet(name) 
// that takes a string and logs "Hello, [name]!".

function greet (name) {
    console.log(`Hello ${name}`)
}
greet("aya")

/* Difference entre les parametres et les arguments 
function bonjour(nom)
                 ↑
             paramètre

bonjour("Ahmed")
         ↑
      argument
*/

//exercice sur args et parametre functions
//Calcul du prix
function calculerPrix (a, b) {
    console.log(`le prix est ${a*b}`)
}
calculerPrix(10 , 4);

//exercice pair ou impair
function pairOuImpair(a) {
    if(a % 2==0) {
        console.log(`le nombre ${a} est pair`)
    } else{
        console.log(`le nombre ${a} est impair`)

    }
}
pairOuImpair(21);

//Exercice de calcule

function calcule(n1 , n2 , operation ) {
if(operation == "+") {
    console.log(`la somme est ${n1 + n2}`)
} else if(operation == "-") {
    console.log(`la sous est ${n1 - n2}`)
} else if(operation == "*") {
    console.log(`la diff est ${n1 * n2}`)
} else if(operation == "+") {
    console.log(`la div est ${n1 / n2}`) } 
    else if(operation == "%") {
    console.log(`la reste est ${n1 % n2}`) } 
}
calcule(10 , 20 , "+");
calcule(50 , 20 , "-");
calcule(10 , 20 , "*");
calcule(50 , 20 , "/");
calcule(50 , 20 , "%");

