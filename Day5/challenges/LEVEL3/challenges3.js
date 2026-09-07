//Groupe par département : Étant donné un tableau d’objets, écrivez 
// une fonction qui les regroupe par leur propriété dans un nouvel objet.employeedepartment
let depar = [
    {
        nom : "aya" , 
        departement : "IT"
    },
     {
        nom : "Mahmmoud" , 
        departement : "IT"
    },
     {
        nom : "salma" , 
        departement : "marketing"
    },
     {
        nom : "salima" , 
        departement : "rh"
    },
     {
        nom : "aya" , 
        departement : "rh"
    }
]
function departement() {
    let stockegale;
    for(let i = 0 ; i<depar.length ; i++) {
        for(let j = 0 ; i<depar.length ; i++) {
            if(depar[i].departement==depar[j].departement) {
                  stockegale=depar[i].name + depar[i].departement
                console.log(depar[i].nom + stockegale)
            }
            else{
                console.log(depar[i].nom + depar[i].departement)
            }
        }
    }
}
departement();
