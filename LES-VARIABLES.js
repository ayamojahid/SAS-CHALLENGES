/* 1. C'est quoi une variable ?
Une variable, c'est simplement une boite qui permet de stocker une information.
La variable sert donc a donner un nom a une information pour pouvoir la retrouver 
et l'utiliser plus tard.

2. Pourquoi utiliser des variables ?
Parce qu'un programme travaille avec beaucoup d'informations.

3. Une variable peut contenir differents types d'informations
Une variable ne contient pas forcement un nombre.

Elle peut contenir plusieurs types de donnees.

Un nombre
Par exemple :

25;  Cela peut representer un age, un prix, un score, etc.

Du texte
Par exemple :

"Bonjour";    Cela peut etre un prenom, une ville, un message, etc.

 Une information vraie ou fausse
Par exemple :

vrai ou faux

C'est ce qu'on appelle un booleen.

Tres utile pour des questions comme :

Est-ce que l'utilisateur est connecte ?

Reponse :

Oui - vrai
Non -  faux


4- LET et CONST 
LET : EST UNE VARIABLE CHANGABLE
CONST : EST UNE VARIABLE INCHANGABLE
*/

let a = 15;
a = 20; // On peut changer la valeur d'une variable declaree avec let
console.log(a);

const b = 30;
// b = 40; // Cela va generer une erreur car on ne peut pas changer la valeur d'une constante
console.log(5);

//Exercice de calculs avec des variables
let x = 10;
let y = 5;

console.log("la somme est " + (x + y)); // Addition
console.log("la difference est " + (x - y)); // Soustraction
console.log("le produit est " + (x * y)); // Multiplication
console.log("le quotient est " + (x / y)); // Division
console.log("le reste de la division  est " + (x % y)); // Modulo (reste de la division)



let prenom = "aya";
let nom = "mjhd";
let age = 23;

console.log("Bonjour, je mapplelle " + prenom + " " +
    nom + " et j'ai " + age + " ans.");

//Boolean on a TRUE =vraie et    FALSE =faux

let Majeur = true;
console.log(Majeur);

let Mineur = false;
console.log(Mineur);