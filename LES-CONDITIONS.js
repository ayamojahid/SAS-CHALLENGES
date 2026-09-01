/* Les Conditions IF ELSE 

if → signifie « si ». Il permet de vérifier une condition.
else if→ signifie« sinon, si».Il permet de vérifier une autre condition si la première est fausse.
else→ signifie« sinon».Il s’ exécute quand aucune des conditions précédentes n’ est vraie.

LES OPERATIONS:
> → vérifie si un nombre est plus grand qu’un autre.
< → vérifie si un nombre est plus petit qu’un autre.
>= → vérifie si un nombre est plus grand ou égal.
<= → vérifie si un nombre est plus petit ou égal.
=== → vérifie si deux valeurs sont strictement égales.
!== → vérifie si deux valeurs sont différentes.
En résume : if décide quoi faire, et les opérateurs (>, <, ===, etc.) permettent de poser la question.*/


//exercoice 1
let age = 19;
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}

//exercice 2

let nombre = 20;
if (nombre > 0) {
    console.log("Positif");
} else if (nombre < 0) {
    console.log("Negatif");
} else {
    console.log("Nul");
}