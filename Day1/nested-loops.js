/*une boucle imbriquée signifie qu'on met une boucle à l'intérieur d'une autre boucle.

 L'idée principale

on imagine 

Boucle extérieure = le grand travail
Boucle intérieure = un petit travail répété à l'intérieur du grand travail

La boucle intérieure est exécutée entièrement à chaque tour de la boucle extérieure.

Exemple simple de fonctionnement

Supposons :

la boucle extérieure fait 3 tours
la boucle intérieure fait 2 tours

la foncton sera

Tour extérieur 1
    → intérieur 1
    → intérieur 2

Tour extérieur 2
    → intérieur 1
    → intérieur 2

Tour extérieur 3
    → intérieur 1
    → intérieur 2
    
    alors 
    Donc la boucle intérieure s'exécute au total 3 × 2 = 6 fois. */

    //exercice

/* Utilise deux boucles for imbriquées pour afficher :

1 1 1
2 2 2
3 3 3*/



for (let i = 1; i <= 3; i++) {
    let ligne = "";

    for (let j = 1; j <= 3; j++) {
        ligne += i + " ";
    }
 
    console.log(ligne);
}
