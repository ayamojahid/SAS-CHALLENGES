let text = "javascript";
let character = "a";
let compteur =0;
for(let i = 0 ; i<text.length ; i++) {
if (text[i] == character) {
compteur++; }
}
console.log(compteur)

//reverse
let word = "hello";
let t="";
for(let i=word.length-1 ; i>=0; i-- ) {
    t+=word[i]
}
console.log(t);


//2eme max
function max(m) {
  let max1=m[0] ;
for(let i =0 ; i<m.length ; i++) {
if(m[i]>max1) {
    max1=m[i];
}
} 
return max1;
}
console.log(max([1, 2, 2, 3, 1, 4, 3 , 58]));

function max2(call) {

}

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


//Défi 5 — Compter les voyelles
let text2 = "JavaScript is amazing";
let compteur2=0;
for(let i = 0 ; i<text2.length ; i++ ) {
    if(text[i] == "a" || text[i] == "i") {}
}