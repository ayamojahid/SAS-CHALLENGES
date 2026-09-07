const products = [
    {
        name: "Laptop",
        prices: [800, 850, 780, 900]
    },
    {
        name: "Phone",
        prices: [500, 550, 480, 520]
    },
    {
        name: "Tablet",
        prices: [300, 350, 320, 330]
    },
    {
        name: "Monitor",
        prices: [200, 220, 190, 210]
    }
];

function moyennePrix() {
    let total=0;
    let nt=0;
    let moyenne=0;
    for(let i = 0 ; i<products.length  ; i++) {
    for(let j=0 ; j<products[i].prices.length ; j++) {
    nt++;
        total+=products[i].prices[j];
    }
    }
    moyenne=total/nt;
    console.log("La somme totale des prix est : " + total)
    console.log("Le nombre total de prix est : " + nt)
    console.log("La moyenne générale des prix est " + moyenne)
}
moyennePrix();