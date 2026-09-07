//Un tableau peut contenir plusieurs objets.

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