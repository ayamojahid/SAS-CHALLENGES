//Créer une fonction qui reçoit un nombre entier n et affiche tous les nombres pairs 
// compris entre 1 et n.


function afficherPairs(n) {
    for(let i = 1 ; i<=n ; i ++) {
        if(i%2==0) {
       console.log(i)
        }
    }
}
afficherPairs(10);
let stock=0;
//Challenge 2 — Compter les résultats pairs
 function compterPairs(a , b)  {
    for(let i=a ;i<b ; i++) {
        if(i%2==0) {
            stock++;
       
        }
    } console.log(stock);
 }

 compterPairs(2, 6);

//Challenge 3 — Construire un triangle


function construireTriangle(taille) {
    for(let i =0 ; i<=taille ; i ++) {
      let ligne=""; 
        for(let j =0 ; j<=i ; j++) {
            ligne+= j;
        }
            console.log(ligne );
    }
}
construireTriangle(5);

//Challenge 4 — Calculatrice avec callback
function calculer(nbr1, nbr2, callback) {
   callback(nbr1 ,nbr2);
}

function addition(a , b) {
    console.log(a+b);
}

function multiplication(a , b) {
    console.log(a*b);
}

function soustraction(a , b) {
    console.log(a-b);
}


calculer(10, 5, addition);
calculer(10, 5, multiplication);
calculer(10, 5, soustraction);