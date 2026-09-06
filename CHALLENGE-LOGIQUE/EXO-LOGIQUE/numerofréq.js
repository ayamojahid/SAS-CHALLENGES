//Défi 9 — Trouver le numéro le plus fréquent
let numbers = [4, 2, 4, 3, 2, 4, 5];
let compteur=0;
let plusGrandCompteur=0;
let nombreLePlusFrequent;
for(let i = 0 ; i<numbers.length ; i++) {
     compteur=0;
    for(let j = 0 ; j <numbers.length ; j++) {
        if (numbers[i] == numbers[j]) {
        compteur++;
        }
        
    }
      if(compteur>plusGrandCompteur) {
        plusGrandCompteur=compteur;
        nombreLePlusFrequent=numbers[i];

    }
  
}
console.log(`${nombreLePlusFrequent} appears ${plusGrandCompteur}`)
