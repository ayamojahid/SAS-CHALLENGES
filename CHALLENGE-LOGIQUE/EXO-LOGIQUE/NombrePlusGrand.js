//Défi 11 — Le mot le plus long d’une phrase
let sentence = "JavaScript requires logical thinking javascripttwoo";

let mot="";
let plusLong = "";
for(let i = 0 ; i<sentence.length ; i++ ) {
 mot += sentence[i]
if(sentence[i] == " ") {

    if(mot.length > plusLong.length) {
        plusLong = mot;
    }

    mot = "";
}
  if(mot.length > plusLong.length) {
        plusLong = mot;
    }
}
console.log(plusLong);


//resoudre avec split(" ")

let sentence1 = "JavaScript requires logical thinking javascripttwoo";

let mot2 =sentence1.split(" ");

let plusLong1 = "";

for(let i = 0 ; i<mot2.length ; i++) {
    
    if(mot2[i].length > plusLong1.length) {
    plusLong1=mot2[i];
    }
}
console.log(plusLong1);
