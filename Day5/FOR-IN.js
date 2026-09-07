//for...in → parcourt les clés d'un objet.
/*
for (let key in objet) {
    // key = clé
    // objet[key] = valeur
}
 */
//Si tu parles de for...in, ça sert à parcourir un objet propriété par propriété.


let user= {
    name : "mahmmoud" ,
    age : 23 , 
    city : "egypt"
}
for (let key in user) {
    console.log(key , user[key]);
}

