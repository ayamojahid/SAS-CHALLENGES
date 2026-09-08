//Tri par bulles : Implémentez l’algorithme de tri par bulles pour trier un tableau de nombres
//  dans l’ordre croissant.

let table= [5, 2, 8, 1, 4];
let swipe;
function bubblesort(table) {


for(let i = 0 ; i<table.length ; i++ ) {
    for(let j =0 ; j<table.length-1 ; j++) {

        if(table[j] > table[j+1] ) {
          swipe=table[j];
          table[j] =table[j+1]
          table[j+1] =swipe;
        } ;

        }

    }
          console.log(table)

} 
bubblesort(table);





