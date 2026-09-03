/*En JavaScript, on peux créer une fonction avec function :

 function add(a, b) {
    return a + b;
} console.log(add(2, 3));


Arrow function
La même fonction peut être écrite :

const add = (a, b) => {
    return a + b;
};
alor on retenir
const nom = (parametres) => {
    // code
};

const add → on crée une variable appelée add
(a, b) → les paramètres
=> → indique qu'on utilise une arrow function
{ } → le corps de la fonction
return → ce que la fonction renvoie

version courte si on a un seul return alors
const add = (a, b) => a + b;

cest la meme chose que 

const add = (a, b) => {
    return a + b;
};

*/

const multiply = (a, b) => a * b;
console.log(multiply1(4, 5));



 const multiply1= (a,b ) => {
 return a*b
 }
console.log(multiply1(4, 5));

/*Exemple avec ton exercice

Tu avais :

function addition(a, b) {
    console.log(a + b);
}

calculer(10, 5, addition);

Tu peux écrire :

const addition = (a, b) => {
    console.log(a + b);
};

calculer(10, 5, addition);

Ou directement :

calculer(10, 5, (a, b) => {
    console.log(a + b);
});

🔥 Ici, l'Arrow Function est directement utilisée comme callback.*/