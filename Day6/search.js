//Linear Search ?
//La recherche linéaire consiste à chercher une valeur dans un tableau élément par élément,
// de gauche à droite.
let table=[4, 8, 2, 9, 5]
let rechercherValeur=5;
let trouve=false;

for(let i=0 ; i<table.length ; i++) {
    if(table[i] == rechercherValeur) {
        console.log("Valeur trouvée :", table[i]);
        trouve=true;
        break;
    }
    
}
if (trouve==false) {
    console.log("  valeur inexistante");
}

//Bubble Sort = tri à bulles. Le principe est assez simple : on compare les nombres deux par deux,
//  côte à côte, et on les échange s’ils sont dans le mauvais ordre.
let table2=[5, 2, 8, 1, 3]

for(let i=0 ; i<table2.length ; i++) {
    for(let j=0 ; j<table2[i].length; j++) {

    }
}