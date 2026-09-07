//exo 1 Personne la plus âgée : Étant donné un tableau d’objets (chacun avec un et ), écrivez une fonction pour trouver et retourner le nom de la personne la plus âgée.personnameage
let students = [
    {
        id : 1,
        name : "aya" , 
        age : 23
    },
        {
        id: 2,
        name: "Sara",
        age: 22
    },

    {
        id: 3,
        name: "Omar",
        age: 24
    } 
]

function plushautage() {
    let age1=students[0].age;
    for(let i = 0 ; i<students.length ; i++) {
        
        if(students[i].age > age1 )
            age1=students[i].age ;
    }
    return age1
}
console.log(plushautage());


//exo 2 Filtre en stock : Étant donné un tableau d’objets (chacun avec , , et booléen), retournez un nouveau tableau contenant uniquement les produits en stock.productnamepriceinStock
let person = [
    {
        nameProduit : "casquette" ,
        price : 366 ,
        instock : 455
    },
     {
        nameProduit : "chaussures " ,
        price : 45 ,
        instock : 0
    },
     {
        nameProduit : "sac" ,
        price : 366 ,
        instock : 85
    }
]
function update() {
        let produitStock=0;
         
    for (let i = 0 ; i<person.length ; i++) {
        if(person[i].instock > 0) {
            produitStock+=person[i].instock;

            console.log( `nom : ${person[i].nameProduit} ,prix : ${person[i].price} dh, stock = ${person[i].instock} `)
        }
 
}}
console.log("les produit qui ont dans stock")
update();


// Exo 3 Total du panier : Étant donné un tableau d’objets représentant un panier 
// (chaque article possède et ), calculez le coût total du panier.pricequantity

let panier = [
    {
        article : 1 , 
        price : 233 , 
        quantite : 3
    },
     {
        article : 2 , 
        price : 50 , 
        quantite : 1
    } ,
    {
        article : 1 , 
        price : 20, 
        quantite : 8
    }
]
function prixTotale() {
    let fois=0;
    let summ=0;
    for(let i =0; i<panier.length ; i++) {
    fois += panier[i].price*panier[i].quantite;
    
    }
    console.log("la somme est " + fois)

    
}
prixTotale();