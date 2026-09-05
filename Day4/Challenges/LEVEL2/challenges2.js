//Trouver le maximum : Écrivez une fonction qui prend un 
// tableau de nombres et retourne le plus grand nombre (sans utiliser ).Math.max

function max(nombre) {
let mx=nombre[0];
    for(let i=0 ; i<nombre.length ; i++) {
    if(nombre[i]>mx) {
        mx=nombre[i];
    }
    } return mx;
}
console.log(max([43 , 89 , 199 , 70 , 2 , 9]))

//Supprimer les doublons : Écrire une fonction qui prend un tableau avec des valeurs
//  dupliquées et retourne un nouveau tableau avec uniquement des valeurs uniques.
function double(val) {
        let stock=[];
    for(let i=0 ; i<val.length ; i++) {
        let unique = true;
       for(let j = i+1 ; j<val.length ; j++) {
        if(val[i] == val [j] && i!==j) {
        unique=false;
        }
       }
        if(unique== true) {
            stock.push(val[i])
        }
    }  return stock;
}
console.log(double([1 , 1 , 52 , 8 , 7 , 23 , 23 ]))


//Custom Reverse: Write a function that reverses an array 
// in place without using the built-in method..reverse()

function reverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverse([4, 3, 2, 1]));



