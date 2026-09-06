// Défi 7 — Trouver le deuxième plus grand nombre

//methode 1

let numbers2 = [12, 5, 31, 8, 19 , 32];
let maxdb=numbers2[0];


for(let i = 1 ; i<numbers2.length ; i++) {
    if(numbers2[i] > maxdb) {
        maxdb=numbers2[i];
    } 
    
}
    
let max2=numbers2[0];
for(let i = 1 ; i<numbers2.length ; i++) {
    if(numbers2[i] > max2 && numbers2[i]!==maxdb ) {
        max2=numbers2[i];
    }
}


console.log(maxdb)
console.log(max2)

//methode 2 avec fonction

function maximum(tableau) {
    let max = tableau[0];

    for(let i=0 ; i < tableau.length ; i++) {
        
    if(tableau[i] > max) {
        max=tableau[i]
    }
    }
    return max;
}
function maximum2(tableau2) {
    const max =maximum(tableau2)
    let max2 = tableau2[0];
    for(let i=0 ; i < tableau2.length ; i++) {
    if(tableau2[i] > max2 && tableau2[i]!=max)
        {
          max2=tableau2[i];
        }    }
return max2;
}

let numbers = [12, 5, 20, 8, 20, 17, 70];

console.log(maximum(numbers));
console.log(maximum2(numbers));
