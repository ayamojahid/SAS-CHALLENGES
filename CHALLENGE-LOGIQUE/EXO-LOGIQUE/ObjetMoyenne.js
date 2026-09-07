const students = [
  {
    name: "Emma Johnson",
    notes: [88, 92, 85, 90, 95]
  },
  {
    name: "Liam Smith",
    notes: [75, 80, 78, 82, 79]
  },
  {
    name: "Sophia Garcia",
    notes: [95, 98, 92, 96, 99]
  },
  {
    name: "Noah Williams",
    notes: [60, 65, 70, 68, 62]
  },
  {
    name: "Olivia Brown",
    notes: [89, 85, 91, 88, 90]
  }
];
function moyenne() {
    let totalNotes=0;
    let moy=0;
    let sum=0;
    for(let i = 0 ; i<students.length ; i++) {
       for (let j = 0; j < students[i].notes.length; j++) {
        sum++;
     totalNotes += students[i].notes[j]; 
     
        
}
moy = totalNotes /sum


    }
    console.log("la somme de tout les notes est " + totalNotes)
    console.log("la somme des notes est " + sum)
    console.log("la moyenne generale est " + moy)
}
moyenne();