let student = {
    name : "aya" , age: 23 , city : "youssoufia"
}
//acceder a une propriete avec point . 
console.log(student.name);
console.log(student.age);
console.log(student.city);

//est on a les crichets
//Les crochets sont particulièrement utiles lorsque le nom de la propriété est stocké dans une variable.

let property = "name";
console.log(student[property]);

//modifier directement 
student.age=28;
console.log(student.age);

//ajouter une nouvele propriete
student.language= "french";
console.log(student);


//delete la propriete 
delete student.language;
console.log(student);

//Les différents types de valeurs

let student85 = {
    name: "Aya",          // String
    age: 23,              // Number
    active: true,         // Boolean
    notes: [15, 17, 18]   // Array
};


//Objet avec fonction
let student3 = {
    name1 : "aya",
    sayHello: function () {
    console.log("Hello");

    }

}
student3.sayHello();

//this dans un objet 
let studentlol={
    name45 : "aya" ,
    
    sayhelo : function() {
        console.log("hello" + this.name)
    }
}