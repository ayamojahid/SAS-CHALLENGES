/* La boucle for en JavaScript
La boucle for sert à répéter une action plusieurs fois.
for (initialisation; condition; miseÀJour) {
    // code
}
*/

//Exemple simple

for (let i = 0; i < 5; i++) {
    console.log(i);
}
/* let i = 0 → on commence a 0
i < 5 on continue tant que i est inférieur à 5
i++ après chaque tour, i augmente de 1 */

console.log(" decrementation");
for (let j = 14; j > 2; j--) {
    console.log(j);
}

//Ajouter 2
console.log(" ajoute 2");

for (let k = 1; k < 20; k += 2) {
    console.log(k)
}

/*La boucle while en JavaScript
while veut dire "tant que".

Elle répète une action tant qu'une condition est vraie.
Avec while, il faut généralement faire évoluer la variable : ( i++; )

ALORS while (condition) {
    // action
}   est tant que la condition est vrai laction se repete
*/
console.log("/////");

let a = 0;
while (a < 10) {
    console.log(a);
    a++;
}


/*do...while en JavaScript
do...while ressemble à while, mais il y a une différence très importante :

!! Avec do...while, le code s'exécute au moins une fois, même si la condition est fausse

while (condition) {
    // code
}   do...while :

J'exécute d'abord → puis je vérifie.*/


console.log("2/////");
let z = 0;
do {
    console.log(z);
    z++;
} while (z < 10);


//Exercice

//Affiche uniquement les nombres pairs de 0 a 20
console.log("nbre pair");

for (let np = 0; np % 2 === 0 && np <= 20; np += 2) {
    console.log(np);
}

//Avec while affiche les nombres pairs de 0 a 20
console.log("nbre pair do while");
let np1 = 0;
while (np1 <= 20 && np1 % 2 == 0) {
    console.log(np1);
    np1 += 2;
}