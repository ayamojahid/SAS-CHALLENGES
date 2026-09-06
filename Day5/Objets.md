# 🟨 JavaScript — Les Objets

## 📌 Introduction

En JavaScript, un **objet (Object)** permet de regrouper plusieurs informations qui appartiennent à une même chose.

Par exemple, pour représenter un étudiant, on peut avoir :

* son nom
* son âge
* sa ville
* sa note

Au lieu de créer plusieurs variables séparées, on peut regrouper toutes ces informations dans un seul objet.

```js
let student = {
    name: "Aya",
    age: 23,
    city: "Youssoufia"
};
```

Un objet est donc une structure qui contient des informations sous forme de **clé : valeur**.

---

# 1. Créer un objet

La syntaxe générale est :

```js
let objet = {
    propriete1: valeur1,
    propriete2: valeur2
};
```

Exemple :

```js
let student = {
    name: "Aya",
    age: 23,
    city: "Youssoufia"
};
```

On peut représenter l'objet comme ceci :

```text
student
│
├── name → "Aya"
├── age  → 23
└── city → "Youssoufia"
```

Ici :

```js
name: "Aya"
```

est une **propriété** de l'objet.

---

# 2. Propriété, clé et valeur

Une propriété est composée d'une **clé (key)** et d'une **valeur (value)**.

```js
let student = {
    name: "Aya",
    age: 23
};
```

On peut voir :

```text
name : "Aya"
 ↑        ↑
clé     valeur

age : 23
 ↑     ↑
clé   valeur
```

### Exemple

```js
name: "Aya"
```

* `name` → clé
* `"Aya"` → valeur

```js
age: 23
```

* `age` → clé
* `23` → valeur

---

# 3. Accéder aux propriétés

Il existe deux principales façons d'accéder à une propriété.

## 3.1 Notation avec le point `.`

C'est la méthode la plus utilisée.

```js
let student = {
    name: "Aya",
    age: 23
};

console.log(student.name);
console.log(student.age);
```

Résultat :

```text
Aya
23
```

La syntaxe :

```js
objet.propriete
```

signifie :

> Accéder à la propriété de cet objet.

---

## 3.2 Notation avec les crochets `[]`

On peut également écrire :

```js
console.log(student["name"]);
console.log(student["age"]);
```

Résultat :

```text
Aya
23
```

Les deux écritures sont équivalentes :

```js
student.name
```

et

```js
student["name"]
```

---

# 4. Pourquoi utiliser `[]` ?

Les crochets sont particulièrement utiles lorsque le nom de la propriété est stocké dans une variable.

```js
let student = {
    name: "Aya",
    age: 23
};

let property = "name";

console.log(student[property]);
```

Résultat :

```text
Aya
```

⚠️ Attention :

```js
student.property
```

ne signifie pas la même chose.

Ici JavaScript cherche une propriété appelée exactement `property`.

---

# 5. Modifier une propriété

On peut modifier directement la valeur d'une propriété.

```js
let student = {
    name: "Aya",
    age: 23
};

student.age = 24;
```

Maintenant :

```js
console.log(student.age);
```

Résultat :

```text
24
```

On peut également modifier le nom :

```js
student.name = "Sara";
```

L'objet devient :

```js
{
    name: "Sara",
    age: 24
}
```

---

# 6. Ajouter une nouvelle propriété

On peut ajouter une propriété qui n'existait pas.

```js
let student = {
    name: "Aya",
    age: 23
};

student.city = "Youssoufia";
```

L'objet devient :

```js
{
    name: "Aya",
    age: 23,
    city: "Youssoufia"
}
```

La syntaxe est :

```js
objet.nouvellePropriete = valeur;
```

---

# 7. Supprimer une propriété

Pour supprimer une propriété, on utilise `delete`.

```js
let student = {
    name: "Aya",
    age: 23,
    city: "Youssoufia"
};

delete student.city;
```

L'objet devient :

```js
{
    name: "Aya",
    age: 23
}
```

`delete` supprime uniquement la propriété.

---

# 8. Les différents types de valeurs

Une propriété peut contenir différents types de données.

```js
let student = {
    name: "Aya",          // String
    age: 23,              // Number
    active: true,         // Boolean
    notes: [15, 17, 18]   // Array
};
```

Un objet peut donc contenir :

* `String`
* `Number`
* `Boolean`
* `Array`
* `Object`
* `Function`

---

# 9. Objet contenant un tableau

Un objet peut contenir un tableau.

```js
let student = {
    name: "Aya",
    notes: [15, 17, 18]
};
```

Pour accéder au tableau :

```js
console.log(student.notes);
```

Résultat :

```text
[15, 17, 18]
```

Pour accéder à une note :

```js
console.log(student.notes[0]);
```

Résultat :

```text
15
```

On combine donc :

```js
student.notes[0]
```

---

# 10. Objet dans un objet

Un objet peut également contenir un autre objet.

```js
let student = {
    name: "Aya",
    age: 23,

    address: {
        city: "Youssoufia",
        country: "Morocco"
    }
};
```

Pour accéder à la ville :

```js
console.log(student.address.city);
```

Résultat :

```text
Youssoufia
```

On peut représenter cela :

```text
student
│
├── name
├── age
│
└── address
     │
     ├── city
     └── country
```

---

# 11. Tableau d'objets ⭐

Cette notion est **très importante** pour les applications JavaScript et particulièrement pour le CRUD.

Un tableau peut contenir plusieurs objets.

```js
let students = [
    {
        id: 1,
        name: "Aya",
        age: 23
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
];
```

On appelle cela un **tableau d'objets (Array of Objects)**.

On peut le représenter :

```text
students
│
├── [0]
│    ├── id   → 1
│    ├── name → Aya
│    └── age  → 23
│
├── [1]
│    ├── id   → 2
│    ├── name → Sara
│    └── age  → 22
│
└── [2]
     ├── id   → 3
     ├── name → Omar
     └── age  → 24
```

---

# 12. Accéder à un objet dans un tableau

On utilise l'index du tableau.

```js
console.log(students[0]);
```

Cela récupère le premier objet :

```js
{
    id: 1,
    name: "Aya",
    age: 23
}
```

Pour récupérer uniquement le nom :

```js
console.log(students[0].name);
```

Résultat :

```text
Aya
```

Pour récupérer l'âge de Sara :

```js
console.log(students[1].age);
```

Résultat :

```text
22
```

### À retenir

```js
students[0].name
```

signifie :

```text
students
   ↓
premier élément
   ↓
propriété name
   ↓
"Aya"
```

---

# 13. Parcourir un tableau d'objets

On peut utiliser une boucle `for`.

```js
let students = [
    { id: 1, name: "Aya", age: 23 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 24 }
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
```

Résultat :

```text
Aya
Sara
Omar
```

Pourquoi ?

### Première itération

```js
i = 0
```

Donc :

```js
students[0].name
```

→ `Aya`

### Deuxième itération

```js
i = 1
```

Donc :

```js
students[1].name
```

→ `Sara`

### Troisième itération

```js
i = 2
```

Donc :

```js
students[2].name
```

→ `Omar`

---

# 14. Ajouter un objet dans un tableau

On utilise souvent `push()`.

```js
let students = [
    { id: 1, name: "Aya", age: 23 },
    { id: 2, name: "Sara", age: 22 }
];

students.push({
    id: 3,
    name: "Omar",
    age: 24
});
```

Le tableau contient maintenant :

```js
[
    { id: 1, name: "Aya", age: 23 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 24 }
]
```

---

# 15. Modifier un objet dans un tableau

On peut modifier directement une propriété.

```js
students[1].age = 25;
```

Avant :

```js
{ id: 2, name: "Sara", age: 22 }
```

Après :

```js
{ id: 2, name: "Sara", age: 25 }
```

---

# 16. Supprimer un objet d'un tableau

Si on connaît son index, on peut utiliser `splice()`.

```js
students.splice(1, 1);
```

La syntaxe :

```js
array.splice(index, nombre);
```

Exemple :

```text
Avant :

[0] Aya
[1] Sara
[2] Omar

students.splice(1, 1)

Après :

[0] Aya
[1] Omar
```

Le premier `1` indique l'index.

Le deuxième `1` indique combien d'éléments supprimer.

---

# 17. Les objets et les fonctions

Un objet peut également contenir une fonction.

```js
let student = {
    name: "Aya",

    sayHello: function() {
        console.log("Hello");
    }
};
```

Pour appeler cette fonction :

```js
student.sayHello();
```

Résultat :

```text
Hello
```

Une fonction qui appartient à un objet est appelée une **méthode (method)**.

---

# 18. `this` dans un objet

Un objet peut utiliser `this` pour accéder à ses propres propriétés.

```js
let student = {
    name: "Aya",

    sayHello: function() {
        console.log("Hello " + this.name);
    }
};

student.sayHello();
```

Résultat :

```text
Hello Aya
```

Ici :

```js
this.name
```

fait référence à la propriété `name` de l'objet.

> La notion de `this` devient plus importante lorsque l'on étudie les méthodes, les classes et la programmation orientée objet.

---

# 19. Les méthodes `Object`

JavaScript fournit plusieurs méthodes utiles pour travailler avec les objets.

## `Object.keys()`

Retourne les clés de l'objet.

```js
let student = {
    name: "Aya",
    age: 23
};

console.log(Object.keys(student));
```

Résultat :

```text
["name", "age"]
```

---

## `Object.values()`

Retourne les valeurs.

```js
console.log(Object.values(student));
```

Résultat :

```text
["Aya", 23]
```

---

## `Object.entries()`

Retourne les paires clé/valeur.

```js
console.log(Object.entries(student));
```

Résultat :

```text
[
    ["name", "Aya"],
    ["age", 23]
]
```

Ces méthodes sont utiles, mais elles sont moins importantes au début que la compréhension des propriétés et des tableaux d'objets.

---

# 20. Objet vs Array

Il est important de ne pas confondre les deux.

## Array

Un tableau sert principalement à stocker une **liste de valeurs**.

```js
let fruits = [
    "Apple",
    "Banana",
    "Orange"
];
```

On utilise les index :

```js
fruits[0];
```

Résultat :

```text
Apple
```

---

## Object

Un objet sert à représenter une **chose avec plusieurs caractéristiques**.

```js
let student = {
    name: "Aya",
    age: 23
};
```

On utilise les propriétés :

```js
student.name;
```

Résultat :

```text
Aya
```

---

## Array of Objects

On peut combiner les deux :

```js
let students = [
    { name: "Aya", age: 23 },
    { name: "Sara", age: 22 }
];
```

On peut alors écrire :

```js
students[0].name;
```

Résultat :

```text
Aya
```

---

# 21. Les objets dans un CRUD ⭐⭐⭐

Les objets sont particulièrement importants pour créer un CRUD.

Imaginons une application de gestion de produits.

Un produit peut être représenté par :

```js
let product = {
    id: 1,
    name: "Laptop",
    price: 7000,
    stock: 10
};
```

Plusieurs produits :

```js
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 7000,
        stock: 10
    },

    {
        id: 2,
        name: "Mouse",
        price: 150,
        stock: 25
    },

    {
        id: 3,
        name: "Keyboard",
        price: 300,
        stock: 15
    }
];
```

On peut ensuite réaliser les quatre opérations CRUD :

```text
CREATE → Ajouter un produit
READ   → Afficher les produits
UPDATE → Modifier un produit
DELETE → Supprimer un produit
```

Par exemple, ajouter :

```js
products.push({
    id: 4,
    name: "Screen",
    price: 2000,
    stock: 8
});
```

Modifier :

```js
products[0].price = 6500;
```

Supprimer :

```js
products.splice(1, 1);
```

---

# 22. Exemple complet

```js
let student = {
    id: 1,
    name: "Aya",
    age: 23,
    city: "Youssoufia"
};

// Lire
console.log(student.name);

// Modifier
student.age = 24;

// Ajouter une propriété
student.email = "aya@email.com";

// Supprimer une propriété
delete student.city;

// Afficher l'objet
console.log(student);
```

---

# 23. À retenir absolument ⭐

Les notions essentielles à connaître sont :

### Créer un objet

```js
let student = {
    name: "Aya",
    age: 23
};
```

### Lire une propriété

```js
student.name;
```

### Lire avec `[]`

```js
student["name"];
```

### Modifier

```js
student.age = 24;
```

### Ajouter une propriété

```js
student.city = "Youssoufia";
```

### Supprimer une propriété

```js
delete student.city;
```

### Tableau d'objets

```js
let students = [
    { id: 1, name: "Aya", age: 23 },
    { id: 2, name: "Sara", age: 22 }
];
```

### Accéder à une propriété dans un tableau d'objets

```js
students[0].name;
```

### Parcourir

```js
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
```


