//Défi 1 — Compter les nombres pairs et impairs
let numbers = [4, 7, 2, 9, 10, 13];
let impair=0;
let pair=0;

for(let i = 0 ; i<numbers.length ; i++) {
    if(numbers[i]% 2 !==0) {
     impair++
    }
}
console.log(`impair ${impair}`);

pair=numbers.length - impair

console.log(`pair ${pair}`);



//Défi 2 — Trouver le plus grand nombre

let numbers2 = [12, 5, 31, 8, 19];
let maxdb=numbers2[0];
for(let i = 1 ; i<numbers2.length ; i++) {
    if(numbers2[i] > maxdb) {
        maxdb=numbers2[i];
    }
}
console.log(maxdb)

//Défi 3 — Compter un caractère à l’intérieur d’une chaîne

let text1 = "javascript";
let character1 = "a";
let compteur1=0;
for(let i = 0 ; i<text1.length ; i++) {

    if(text1[i]==character1) {
        compteur1++;
    }
}
console.log(compteur1)



//Défi 4 — Inverser une corde manuellement

let word1 = "hello"; 
let stock2= "" ; 
for(let i = word.length-1 ; i>=0  ; i--) {
stock2+=word[i]; 
}
console.log(stock2)




//Défi 5 — Compter les voyelles  a, e, i, o, u


let text2 = "JavaScript is amazing";
let compteur2=0;
for(let i = 0 ; i<text2.length ; i++ ) {
    if(text2[i] == "a" || text2[i] == "i" || text2[i] == "e" || text2[i] == "o" || text2[i] == "u" ) {
        compteur2++;
    }
}
console.log(compteur2);



//Défi 6 — Détecter un palindrome
let word2 = "level";
let w = true;
for(let i =0 ; i<word2.length ; i++) {
    if(word2[i] !== word2[word2.length-1-i]) 
        {
          w = false;
        }
}
console.log(w);

