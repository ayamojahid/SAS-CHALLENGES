//Flatten 2D Array: Write a function that takes a 2D array (matrix)
//  and flattens it into a 1D array without using ..flat()


function mt(matrix) {
    let matrix1d=[] ;
   
for(let i=0 ; i<matrix.length ; i++) {
    for(let j =0 ; j<matrix[i].length ; j++) {
         matrix1d.push(matrix[i][j])
    }
}
return matrix1d;

}
console.log(mt([ [1,2,3], [4,5,6],  [7,8] ]) );

//Somme diagonale : Avec un tableau 2D 3x3 de nombres, calculez la somme de la diagonale principale (en haut à gauche en bas à droite).
function sumdiagonale(mat2d) {
    let sum=0;
    for(let i = 0 ; i<mat2d.length ; i++) {
        sum+=mat2d[i][i]
    } 
    return sum;
}
console.log(sumdiagonale([ [1,2,3], [4,5,6],  [7,8,9] ]) );


//Transposition matricielle : Écrire une fonction qui prend un tableau 2D et échange ses lignes avec ses colonnes.
function transposition(mt){
    
    let result=[];
 
    for(let i=0 ; i<mt.length ; i++){
    result[i] = [];
    }

    for(let i=0 ; i<mt.length ; i++){
        for(let j = 0 ; j<mt[i].length ; j++){
            
            result[j][i] = mt[i][j]
         }
    }
    return result;
}
console.log(transposition([ [1,2,3], [4,5,6],  [7,8,9] ]) );
