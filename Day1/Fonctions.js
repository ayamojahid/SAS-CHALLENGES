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

//4 return  très important
// C'est l'une des choses les plus importantes à comprendre.
// return permet à la fonction de renvoyer un résultat.

console.log("4. return  ");
function add2(a, b) {
    return a + b;
}
console.log(add2(5, 7));


//console.log vs return
// | `console.log()`            | `return`                           |
// | -------------------------- | ---------------------------------- |
// | Affiche quelque chose      | Renvoie une valeur                 |
// | Sert beaucoup au debugging | Sert à utiliser le résultat        |
// | Visible dans la console    | Peut être stocké dans une variable |
// | Ne remplace pas `return`   | Termine la fonction                |

// console.log() = « montre-moi le résultat »

// return = « donne-moi le résultat pour que je puisse l'utiliser dans tout le code  ».

console.log("5. console.log vs return");
let resultat = add2(5, 3);
let double = resultat * 2;
console.log(double);


let re2=add(5, 3);
let double2 = re2 * 2;
console.log(double2); // affiche NaN car add() ne renvoie rien, il affiche juste le résultat dans la console    

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

