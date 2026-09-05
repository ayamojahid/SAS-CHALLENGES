/*
Un tableau 2D est un tableau qui contient d’autres tableaux. 
On peut le voir comme un tableau avec des lignes et des colonnes.

let tableau = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
 visuellement 
                 Colonne 0      	Colonne 1	        Colonne 2
Ligne 0	             1	               2 	                3
Ligne 1	             4              	5	                6
Ligne 2            	7	                 8	                9


tableau[ligne][colonne]

console.log(tableau[0][1]); // 2
console.log(tableau[2][0]); // 7

i représente la ligne
j représente la colonne
tableau[i][j] représente la case

*/




//affichage
let tableau1 =[ [1 , 2 , 4] , [4 , 8 , 9] , [7 , 9 , 3] ] ;
for (let i = 0; i < tableau1.length; i++) {
    for (let j = 0; j < tableau1[i].length; j++) {
        console.log(tableau1[i][j]);
    }
}







//ecritute avec spacees
let tableau =[ [1 , 2 , 4] , [4 , 8 , 9] , [7 , 9 , 3] ] ;
console.log(tableau[0][1]);

//pour afficher tout le tableau alor
for(let i =0 ; i<tableau.length ; i++) {
    let spa="";
    for(let j=0 ; j<tableau[i].length ; j++) {
        spa+=tableau[i][j];

    }
        console.log(spa)

}