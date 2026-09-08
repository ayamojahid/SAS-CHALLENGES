var prompt = require('prompt-sync')();

let students = [];
let nom;
let age;
let note;
 

function ajouterStd() {



  do{
  nom=(prompt("Veuiller entrer votre nom : ")); 
  } while( nom === null || nom.trim() == "");


  do{
  age=Number(prompt("Veuiller entrer votre age : "))
  } while(age>120 || age<=0  || age===null)

  do{
  note=Number(prompt("Veuiller entrer votre note : "))
  } while(note>20 || note == null || note<=0)



  let student = {
    nom: nom,
    age: age,
    note: note
};
students.push(student);

   
}


   function afficherStd() {

    for (let etudiant of students) {
        console.log(etudiant);
    }
}

function rechercheStd(){
  let recherche="";
  let trouve=false;
    recherche=(prompt("Veuiller entrer votre nom a rechercher : ")); 

for(let i=0 ; i<students.length ; i++) {
  
  if(students[i].nom == recherche) {
  console.log("Le nom est trouvé :", students[i]);
  trouve=true;
  
  }
  else if(trouve == false) {
    console.log("Étudiant non trouvé");
  }
  
}
}


function modifierStd() {
  
}

function main() {
do{
        console.log("************MENU************");
        console.log("1. Ajouter Std");
        console.log("2. Afficher Std");
        console.log("3. Rechercher Std");
        console.log("4. Modifier Std");
        console.log("5. Supprimer Std");
        console.log("6. search Std");
        console.log("7. sort Std");
        console.log("8. Quitté");
        console.log("************************");

        n=Number(prompt("Veuiller entrer un choix de 1 a 8 : "))
       
       switch(n) {
        case 1 : ajouterStd()
        break;
        case 2 : afficherStd()
        break;
        case 3 : rechercheStd()
        break;
        case 4 : modifierStd()
        break;
        case 5 : supprimerStd()
        break;
        case 6 : searchStd()
        break;
        case 7 : sorterStd()
        break;
        case 8 : 
        break;
        default :
         console.log("Votre reponse n'etait pas acceptable, Svp donne moi une valeur entre 1 et 6");
         break;
       }

} while(n!=8)

    }

    main();