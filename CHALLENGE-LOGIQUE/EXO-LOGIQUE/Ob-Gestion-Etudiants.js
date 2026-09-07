const students = [
    {
        name: "Aya",
        notes: [14, 16, 12, 18, 15]
    },
    {
        name: "Sara",
        notes: [10, 13, 15, 11, 12]
    },
    {
        name: "Yassine",
        notes: [17, 19, 16, 18, 20]
    },
    {
        name: "Adam",
        notes: [8, 12, 10, 9, 22]
    }
];

function analyserStudents() {
    let sumnote=0
    let notess=0;
    let moy=0;
    let notbig=students[0].notes[0];
    let notsmall=students[0].notes[0];
    let n=[];
    let namebig="";

    for(let i = 0 ; i<students.length ; i ++) {
        for (let j=0 ; j <students[i].notes.length ; j++) {
        sumnote++;
        notess+=students[i].notes[j];
         if(students[i].notes[j]>notbig) {
            namebig=students[i].name;
            notbig=students[i].notes[j];
        }
        if(students[i].notes[j]<notsmall) {
            notsmall=students[i].notes[j];
        }
        if(students[i].notes[j]>=15) {
        n.push(students[i].notes[j]);
        }
        }

let totalEtudiant = 0;
let moyenneEtudiant = 0;
for(let i=0 ; i<students.length ; i++ ) {
    moyenneEtudiant=0;
    for(let j = 0 ; j<students[i].notes.length ; j++) {
        
        totalEtudiant+= students[i].notes[j] ;

       
    }
     moyenneEtudiant = totalEtudiant / students[i].notes.length;

    console.log(students[i].name + " : " + moyenneEtudiant);
}

    }
moy=notess/sumnote;
console.log("Somme de note est = " + notess);
console.log("somme de note est = " + sumnote);
console.log("somme de note est = " + moy);
console.log("Meilleure note est de " + namebig +" = "+ notbig);
console.log("Plus mauvaise note  = " + notsmall);
console.log(n);


}
analyserStudents();