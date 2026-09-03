
//return  très important
// C'est l'une des choses les plus importantes à comprendre.
// return permet à la fonction de renvoyer un résultat.




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


function add(a,b) {
return a + b;}
console.log(add(5, 3));


let resultat = add(9, 3);
let double = resultat * 2;
console.log(double);


function add1(c,d) {
    console.log(`la somme est ${c+d}`)
}


let re2=add1(5, 3);
let double2 = re2 * 2;
console.log(double2); // affiche NaN car add() ne renvoie rien, il affiche juste le résultat dans la console    


