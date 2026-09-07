let info = [
    {
        name : "aya" , 
        age : 25
    }, 
    {
        name : "salma" , 
        age : 20
    } 
]
function moyenne() {
    let allAge=0;
    let moy=0;
    for(let i = 0 ; i<info.length ; i++) {
     allAge += info[i].age; //45
    }
    moy=allAge/info.length
    console.log(moy)
}
moyenne();