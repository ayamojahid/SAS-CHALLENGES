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

/*switch en JavaScript
switch sert à choisir une action parmi plusieurs possibilités.
C'est surtout pratique quand tu veux comparer une même variable avec plusieurs valeurs.
Par exemple, un programme qui  reconnaître un jour :

1 → lundi
2 → mardi
3 → mercredi
etc.
Avec beaucoup de if / else if, ça peut devenir long. switch permet de rendre ça plus clair.

Les éléments importants

switch → indique ce qu'on veut vérifier.
case → représente une possibilité.
break → arrête le switch une fois qu'un case a été trouvé.
default → ce qui se passe si aucune possibilité ne correspond.*/

//Exemple

let jour = 5;
switch (jour) {
    case 1:
        console.log("Lundi")
        break;
    case 2:
        console.log("Mardi")
        break;
    case 3:
        console.log("Mercredi")
        break;

    default:
        console.log("Aucun jour")
}