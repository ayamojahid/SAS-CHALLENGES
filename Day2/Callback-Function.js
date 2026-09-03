/* C’est quoi un callback ?
Un callback, c’est simplement une 
fonction qu’on donne à une autre fonction en argument, pour qu’elle soit exécutée plus tard.

*/

//exemple 
function direBonjour() {
  console.log("Bonjour !");
}

function executerFonction(callback) {
  callback();
}

executerFonction(direBonjour);


/*direBonjour est une fonction.
On la donne à executerFonction.
executerFonction reçoit cette fonction dans callback.
callback() exécute direBonjour.*/


/*function direBonjour() {
  console.log("Bonjour !");
}

function faireQuelqueChose(callback) {
  console.log("Je travaille...");
  callback();
}

faireQuelqueChose(direBonjour);

Ici :

direBonjour est une fonction.
On la donne à faireQuelqueChose.
faireQuelqueChose fait son travail.
Quand elle a fini, elle fait callback().
Donc direBonjour() est exécutée.*/

function direBonjour() {
  console.log("Bonjour !");
}

function faireQuelqueChose(callback) {
  console.log("Je travaille...");
  callback();
}
faireQuelqueChose(direBonjour);

//exercice calcul + callback

function cl(a , b , callback) {
    return a + b ;
}
function afficher (resultat) {
    callback();
    console.log(a+b)
}
cl(10 , 5 , afficher);


function cl(a, b, callback) {
    callback(a + b);
}

function afficher(resultat) {
    console.log("Résultat : " + resultat);
}

cl(10, 5, afficher);

// reçoit un nombre age
// reçoit un callback
// si age >= 18, elle appelle le callback avec "Majeur"
// sinon, elle appelle le callback avec "Mineur"
// Le programme doit afficher :

function nbre(age, callback) {
    if (age >= 18 ) {
        callback("majeur")
    } else {callback("mineur")}
}
function aff(res) {
    console.log("res= " + res)
}

nbre(20 , aff)

//ici alors callback devient aff. so we can imagine 
/*function nbre(age, callback)

on peut imaginer est egale a :

function nbre(age, aff)*/ 


// exercice
function saluer(nom , callback) {
  callback()
}
function bienvenue(){
console.log("bonjour")
}








function bonjour() {
    console.log("Bonjour");
}

function auRevoir() {
    console.log("Au revoir");
}

function excecuter(callback) {
  callback();
}

excecuter(auRevoir);
excecuter(bonjour);