//exo 1 Objet automobile : Créez un objet représentant une (marque, modèle, année). Ajoutez une méthode à l’objet qui enregistre « Cette voiture est un [marque] [modèle] ».car
console.log("exercice 1 ")


let car= {

    brand : "tesla" ,
    model : "kit" ,
    year : 2024 
}
console.log(`Cette voiture est un ${car.brand} mode ${car.model}`)
//meme exercice avec methode

let car1= {
    brand : "tesla" ,
    model : "kit" ,
    year : 2024 ,
    afich : function() {
        console.log("Cette voiture est un " + this.brand + " "+ this.model)
    }
}
car1.afich();


console.log("exercice 2 ")


//exo 2 Mutation d’objet : Étant donné un objet, ajoutez une nouvelle propriété et mettez à jour cette propriété. Enregistrez l’objet mis à jour.userisActive: trueage
let mutation = {
    age : 25
}
mutation.Isactive=true;
mutation.age=27;
console.log(mutation)


console.log("exercice 3 ")
//exo 3 Itération clé/valeur : Écrivez une boucle pour itérer sur un objet et enregistrez chaque clé ainsi que sa valeur correspondante.for...in
let information = {
    nom : "aya" , 
    prenom : "mojahid" , 
    age : 27 , 
    city : "safi"
}

for(let key in information) {
    console.log(key , information[key])
}
