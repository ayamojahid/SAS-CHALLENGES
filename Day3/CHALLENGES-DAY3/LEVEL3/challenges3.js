// Capitalize Words: Write a function that takes a sentence and 
// capitalizes the first letter of every word.


function capitalize(string) {
  return  string[0].toUpperCase() + string.slice(1)
}
console.log(capitalize("aya mojahid"));

//all the first letter of every word

function capitalize2(string) {
    let word=string.split();
    for(let i = 0 ; i<string.length ; i ++) {
        word[i]= word[i][0].toUpperCase() + word[i].slice(1);
    }
    return word.join(" ");
}
console.log(capitalize("je mappelle aya"));

//String Compressor: Write a function that compresses repeating characters 
// (e.g., "aaabbc" becomes "a3b2c1").

let compteur=1; 
function compressing(characters) {
    let stock="";
    for(let i=0 ; i<characters.length ; i++) {
    if(characters[i]==characters[i+1]) {
    compteur++;
} else {
    stock+=characters[i] + compteur
    compteur=1;
}
    }
     return stock;
}
console.log(compressing("aaabbc"))

//Vérificateur d’anagrammes : Écrivez une fonction qui vérifie si deux chaînes sont des anagrammes 
// l’une de l’autre (contiennent exactement les mêmes lettres dans des ordres différents).



// function anagrammes()