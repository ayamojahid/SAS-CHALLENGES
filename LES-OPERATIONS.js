/*&& — ET
&& signifie ET.

La condition est vraie seulement si les deux conditions sont vraies.

Exemple en français :

Si j'ai 18 ans ET si j'ai le permis → je peux conduire. == il faut que les deux conditions soit vrai


|| — OU
|| signifie OU.

La condition est vraie si au moins une des deux conditions est vraie.

Exemple :

Si j'ai une carte OU de l'argent → je peux acheter. une est vrai alors cest vrai*/


//Exemple 
/*Exercice : Contrôle d'accès
Crée ces variables :

age = 20
connecte = true
aCarte = false
Ton programme doit afficher :

"Accès autorisé" si la personne a 18 ans ou plus ET est connectée.
Sinon, afficher "Accès refusé".
Ensuite, vérifie si la personne peut acheter un billet :
Elle peut acheter si elle a une carte OU si elle a de l'argent.
Crée donc une variable argent avec une valeur de ton choix.*/

let age = 20;
let connecte = true;
let eCarte = true;
let argent = 100;

if (age >= 18 && connecte == true) {
    console.log("Vous etes connectee ")
} else {
    console.log("Access est refuse ")
}

if (eCarte == true || argent > 50) {
    console.log("il peut acheter un billet")
} else {
    console.log("ne peut pas acheter un billet ")
}