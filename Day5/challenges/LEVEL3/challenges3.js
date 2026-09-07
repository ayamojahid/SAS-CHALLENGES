//Groupe par département : Étant donné un tableau d’objets, écrivez 
// une fonction qui les regroupe par leur propriété dans un nouvel objet.employeedepartment



let depar = [
    {
        nom: "aya",
        departement: "IT"
    },
    {
        nom: "Mahmmoud",
        departement: "IT"
    },
    {
        nom: "salma",
        departement: "marketing"
    },
    {
        nom: "salima",
        departement: "rh"
    },
    {
        nom: "hamid",
        departement: "rh"
    }
];

function departement() {

    let employeedepartment = {};

    for (let i = 0; i < depar.length; i++) {

        let stockegnom = [];

        for (let j = 0; j < depar.length; j++) {

            if (depar[i].departement == depar[j].departement) {

                stockegnom.push(depar[j].nom);
            }
        }

        employeedepartment[depar[i].departement] = stockegnom;
    }

    console.log(employeedepartment);
}

departement();

//Fusionner les profils : Écrire une fonction qui prend deux objets (par exemple, et ) 
// et les fusionne en un seul objet.basicInfocontactInfo

let basicInfo = {
    nom: "Aya",
    age: 23,
    ville: "Marrakech"
};
let contactInfo = {
    email: "aya@gmail.com",
    telephone: "0612345678",
    adresse: "Guéliz"
};
function twooobjet() {
    let employeedepartment = {};
     
    for(let key in basicInfo) {
    employeedepartment[key] = basicInfo[key];
    }
     for(let key in contactInfo) {
    employeedepartment[key] = contactInfo[key];
    }
    console.log(employeedepartment)
}
twooobjet()

//Introduction au clone profond : Écrivez une fonction qui crée manuellement une copie
//  profonde d’un objet simple (sans objets imbriqués) afin que la modification de la 
// copie n’affecte pas l’original.
