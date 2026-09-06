//Défi 12 — Compresser les personnages consécutifs
let caractere= "aaabbccccdaa";
let compteur=1 ;
let clp=true;
let stok1="";
let stok2=0;

for(let i=0 ; i<caractere.length; i++) {

    if(caractere[i] == caractere[i+1]) {
        compteur++;
          
    } 
     else {
        stok1+=caractere[i] +compteur;
        compteur=1;
       
    }
    
   
        
}   
console.log(stok1);


