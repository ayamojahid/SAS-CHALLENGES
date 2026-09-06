//Défi 10 — Séparer les numéros selon les conditions
let numbers = [-4, 7, 0, -2, 9, 0, 3];

let Nombresnegatifs =[];
let Zeros =[]
let Nombrespositifs = []
for(let i =0 ; i<numbers.length ; i++) {
    if(numbers[i] > 0) {
        Nombrespositifs.push(numbers[i]);
    }
    else if(numbers[i] < 0) {
        Nombresnegatifs.push(numbers[i]);
    }
    else{
        Zeros.push(numbers[i])
    }
}
console.log(`les nombre positif est : ${Nombrespositifs}`);
console.log(`les nombre negatif est : ${Nombresnegatifs}`);
console.log(`zeros : ${Zeros}`);

