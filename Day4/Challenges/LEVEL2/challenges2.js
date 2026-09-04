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
    for(let i=0 ; i<val.length ; i++) {
        if(val[i] == val[i+1]) {
            
        
        }
    }
}