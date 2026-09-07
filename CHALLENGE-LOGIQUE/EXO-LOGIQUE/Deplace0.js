let arr = [
    {
        name : "ali" ,
        notes : [12 , 15, 16]
    },
     {
        name : "ali" ,
        notes : [12 , 15, 16]
    }
]
function moyyeneGenerale() {
    let moyGenera= 0;
    let moyGeneral=0;
    let sum=0;
    for(let i = 0 ; i<arr[i].notes.length ; i++) {
            sum+=arr[i].notes
        moyGenera=sum/arr.notes.length
    }
    moyGeneral= moyGenera/arr.length;
    console.log(moyGenera);
    console.log(moyGeneral)
     
}
moyyeneGenerale();  

//on peut la fait avec for(let std of moyen )