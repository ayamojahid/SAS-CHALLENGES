/*Un Array = tableau.

Il permet de stocker plusieurs valeurs dans une seule variable.

Sans tableau :

let nom1 = "Aya";
let nom2 = "Sara";
let nom3 = "Amine";

Avec un tableau :

let noms = ["Aya", "Sara", "Amine"];

| Index | Valeur |
| ----: | ------ |
|     0 | Aya    |
|     1 | Sara   |
|     2 | Amine  |

Pour récupérer une valeur :
console.log(noms[0]);  // affiche aya
*/


let noms = ["aya" , "mahmmoud"  , "fatima "] ;
console.log(noms[0]);

// .PUSH()  Ajouter un élément Ajoute à la fin.

noms.push("salma");
console.log(noms);

// pop()  Supprimer le dernier élément

noms.pop("");
console.log(noms);

//unshift() Ajouter au début
noms.unshift("mama");
console.log(noms);

// shift() Supprimer le premier
noms.shift();
console.log(noms);

// length Connaître la taille
let noms1 = ["Aya", "Sara", "Amine"];

console.log(noms1.length);


//Parcourir un Array avec for
let noms12 = ["Aya", "Sara", "Amine"];
for(let i =0 ; i<noms12.length ; i++) {
    console.log(noms12[i])
}

//Chercher dans un tableau
let nombres = [10, 20, 30, 40];

for (let i = 0; i < nombres.length; i++) {

    if (nombres[i] == 30) {
        console.log("Trouvé");
    }

}

//Calculer avec un Array
let nombres1 = [10, 20, 30];
let somme =0;
for(let i = 0 ; i<nombres1.length ; i++) {
   somme+=nombres1[i]
}
console.log(`La somme est ${somme}`);

//Trouver le maximum
let n2 = [10, 50, 20, 80, 30];
let max=n2[0];
for(let i =0 ; i<n2.length ; i++) {
  if(n2[i] >max) {
    max=n2[i];
  }
}
console.log(`le maximum est ${max}`)

//slice() Permet de prendre une partie du tableau sans modifier l'original.
let nombres23 = [10, 20, 30, 40, 50];

let resultat = nombres23.slice(1, 4);

console.log(resultat);


//splice() Permet de modifier le tableau. supp 1 et 2
let nombres34 = [10, 20, 30, 40];

nombres34.splice(1, 2);

console.log(nombres34);

