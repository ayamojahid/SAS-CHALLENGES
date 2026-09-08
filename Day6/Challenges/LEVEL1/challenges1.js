//linear search  linearSearch(array, target)

let array=[4, 8, 2, 9, 5];
let target=5;
let notFound=false;

function linearSearch(array , target) {
for(let i = 0 ; i<array.length ; i++) {
    if(array[i] == target) {
        console.log("La valeur est trouve " + array[i] + " lindex de valeur est " + array[i-1])
        notFound=true;
        break;
    }
  
}

  if (notFound==false) {
        console.log("la valeur ne se trouve pas dans le tableau");
        
        
    }

}
linearSearch(array, target)


////linear search Implémentation de recherche linéaire : Écrivez une fonction qui boucle un tableau et 
// retourne l’index de la cible (ou -1 si elle n’est pas trouvée).linearSearch(array, target)
let array1=[4, 8, 2, 9, 5];
let target1=5;

function linearSearch1(array1 , target1) {
for(let i = 0 ; i<array1.length ; i++) {
    if(array1[i] == target1) {
        return i

    }
   
}
        return -1
    
}

 console.log(linearSearch1(array1 , target1))

 //Trouver l’index minimum : Écrivez une fonction qui recherche dans un tableau 
 // de nombres et retourne l’index du plus petit nombre.

 let tableau=[12 , 52 , 85 , 66 , 1 , 52];
 let minimum=tableau[0];
 let indexminimum=0;
 function minimumfunction(tableau) {
for(let i = 0 ; i<tableau.length ; i++) {
    if(minimum>tableau[i]) {
        minimum=tableau[i];
        indexminimum= i ;
    }
}
return indexminimum;
 }

minimumfunction(tableau);

//Recherche des occurrences de comptage : Modifier une recherche linéaire pour compter et retourner 
// combien de fois un nombre cible apparaît dans un tableau.

//Le 5 apparaît 3 fois. La fonction doit donc retourner 3.


let table = [4, 5, 2, 5, 9, 5];
let targ = 5;

function recher(table, targ) {
    let compteur = 0;

    for (let i = 0; i < table.length; i++) {
        if (table[i] == targ) {
            compteur++;
        }
    }
    

    return compteur;
}

console.log(recher(table, targ));
