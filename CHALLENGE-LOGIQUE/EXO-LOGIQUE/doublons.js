//Défi 8 — Supprimer manuellement les doublons
let numbers = [1, 2, 2, 3, 1, 4, 3];
let stock=[];

for( let i =0 ; i<numbers.length ; i++ ) {

    let trouve = false;

    for(let j=0 ; j<numbers.length ; j++) {

        if(numbers[i] == stock[j] ) {
                trouve = true;
        } 
    }
    if(trouve == false) {
        stock.push(numbers[i]);
    } 
}
console.log(stock);
