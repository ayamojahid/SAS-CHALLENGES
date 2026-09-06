# 📚 Cours JavaScript — Les Objets

## 1. C'est quoi un objet ?

Un **objet** permet de regrouper plusieurs informations qui concernent **la même chose**.

Par exemple, si on parle d'un étudiant :

Sans objet :

```js
let nom = "Aya";
let age = 23;
let ville = "Youssoufia";
```

On a plusieurs variables séparées.

Avec un objet :

```js
let student = {
    nom: "Aya",
    age: 23,
    ville: "Youssoufia"
};
```

Maintenant, toutes les informations concernant l'étudiant sont regroupées dans `student`.

👉 Un objet est donc comme une **fiche d'identité**.

---

# 2. Comment créer un objet ?

La syntaxe est :

```js
let objet = {
    propriété: valeur,
    propriété: valeur
};
```

Exemple :

```js
let student = {
    nom: "Aya",
    age: 23,
    ville: "Youssoufia"
};
```

Ici :

```text
student
   │
   ├── nom   → "Aya"
   ├── age   → 23
   └── ville → "Youssoufia"
```

Les éléments `nom`, `age`, `ville` sont appelés des **propriétés**.

---

# 3. Propriété = clé + valeur

Regarde :

```js
let student = {
    nom: "Aya",
    age: 23
};
```

On peut voir :

```text
nom : "Aya"
 ↑       ↑
clé    valeur

age : 23
 ↑     ↑
clé  valeur
```

On appelle souvent :

* **key** → clé
* **value** → valeur
* **property** → propriété

Donc :

```js
nom: "Aya"
```

est une propriété.

---

# 4. Comment récupérer une valeur ?

Il existe principalement **2 façons**.

## Méthode 1 — notation avec `.` ⭐

```js
let student = {
    nom: "Aya",
    age: 23
};

console.log(student.nom);
```

Résultat :

```text
Aya
```

Et :

```js
console.log(student.age);
```

Résultat :

```text
23
```

### Pourquoi ?

```js
student.nom
```

signifie :

> Va dans l'objet `student` et donne-moi la valeur de `nom`.

---

# 5. Méthode 2 — notation avec `[]`

Tu peux aussi faire :

```js
console.log(student["nom"]);
```

Résultat :

```text
Aya
```

Et :

```js
console.log(student["age"]);
```

Résultat :

```text
23
```

Donc :

```js
student.nom
```

et

```js
student["nom"]
```

donnent la même chose.

### Quand utiliser `[]` ?

Elle devient particulièrement utile quand le nom de la propriété est dans une variable :

```js
let propriete = "nom";

console.log(student[propriete]);
```

Résultat :

```text
Aya
```

⚠️ Ici, ne fais pas :

```js
student.propriete
```

car JavaScript chercherait une propriété appelée littéralement `"propriete"`.

---

# 6. Modifier une propriété

Très important pour le CRUD.

On peut modifier une valeur directement :

```js
let student = {
    nom: "Aya",
    age: 23
};

student.age = 24;
```

Maintenant :

```js
console.log(student.age);
```

donne :

```text
24
```

Tu peux aussi modifier le nom :

```js
student.nom = "Sara";
```

L'objet devient :

```js
{
    nom: "Sara",
    age: 24
}
```

👉 **UPDATE dans un CRUD** utilise cette logique.

---

# 7. Ajouter une nouvelle propriété

Tu peux ajouter une propriété qui n'existait pas :

```js
let student = {
    nom: "Aya",
    age: 23
};

student.ville = "Youssoufia";
```

Maintenant :

```js
console.log(student);
```

donne quelque chose comme :

```js
{
    nom: "Aya",
    age: 23,
    ville: "Youssoufia"
}
```

Donc :

```js
objet.nouvellePropriete = valeur;
```

permet d'ajouter une propriété.

---

# 8. Supprimer une propriété

Pour supprimer une propriété :

```js
delete student.age;
```

Avant :

```js
{
    nom: "Aya",
    age: 23
}
```

Après :

```js
{
    nom: "Aya"
}
```

⚠️ `delete` supprime **la propriété**, pas tout l'objet.

---

# 9. Les valeurs d'un objet peuvent être différentes

Un objet peut contenir plusieurs types de données.

```js
let student = {
    nom: "Aya",        // string
    age: 23,            // number
    active: true,       // boolean
    notes: [15, 17, 18] // array
};
```

Donc un objet peut contenir :

* string
* number
* boolean
* array
* autre objet
* fonction

---

# 10. Objet contenant un tableau

Exemple :

```js
let student = {
    nom: "Aya",
    age: 23,
    notes: [15, 17, 18]
};
```

Pour récupérer le tableau :

```js
console.log(student.notes);
```

Résultat :

```text
[15, 17, 18]
```

Pour récupérer une note :

```js
console.log(student.notes[0]);
```

Résultat :

```text
15
```

Pourquoi ?

```text
student
   │
   └── notes
        │
        ├── 0 → 15
        ├── 1 → 17
        └── 2 → 18
```

---

# 11. Objet dans un objet

Oui, c'est possible.

```js
let student = {
    nom: "Aya",
    age: 23,

    adresse: {
        ville: "Youssoufia",
        pays: "Maroc"
    }
};
```

Pour récupérer la ville :

```js
console.log(student.adresse.ville);
```

Résultat :

```text
Youssoufia
```

Tu peux voir :

```text
student
   │
   ├── nom
   ├── age
   │
   └── adresse
          │
          ├── ville
          └── pays
```

---

# 12. Le concept TRÈS important : tableau d'objets ⭐⭐⭐

C'est **exactement ce dont tu auras besoin pour le CRUD**.

Imagine plusieurs étudiants.

Tu pourrais faire :

```js
let student1 = {
    id: 1,
    nom: "Aya",
    age: 23
};

let student2 = {
    id: 2,
    nom: "Sara",
    age: 22
};
```

Mais ce n'est pas pratique si tu as 100 étudiants.

On utilise donc un **tableau contenant plusieurs objets** :

```js
let students = [
    {
        id: 1,
        nom: "Aya",
        age: 23
    },

    {
        id: 2,
        nom: "Sara",
        age: 22
    },

    {
        id: 3,
        nom: "Omar",
        age: 24
    }
];
```

Ça donne :

```text
students
   │
   ├── [0]
   │     ├── id → 1
   │     ├── nom → Aya
   │     └── age → 23
   │
   ├── [1]
   │     ├── id → 2
   │     ├── nom → Sara
   │     └── age → 22
   │
   └── [2]
         ├── id → 3
         ├── nom → Omar
         └── age → 24
```

---

# 13. Comment accéder à un objet dans le tableau ?

On commence par l'index du tableau.

```js
console.log(students[0]);
```

Tu récupères :

```js
{
    id: 1,
    nom: "Aya",
    age: 23
}
```

Ensuite tu peux accéder à une propriété :

```js
console.log(students[0].nom);
```

Résultat :

```text
Aya
```

Ou :

```js
console.log(students[1].age);
```

Résultat :

```text
22
```

### Retenir cette logique :

```js
students[0].nom
```

=

```text
students
   ↓
premier objet
   ↓
propriété nom
   ↓
"Aya"
```

---

# 14. Parcourir un tableau d'objets

Très important.

On peut utiliser une boucle :

```js
for (let i = 0; i < students.length; i++) {
    console.log(students[i].nom);
}
```

Résultat :

```text
Aya
Sara
Omar
```

Pourquoi ?

### Première boucle :

```js
i = 0
```

Donc :

```js
students[0].nom
```

→ Aya

### Deuxième :

```js
i = 1
```

Donc :

```js
students[1].nom
```

→ Sara

### Troisième :

```js
i = 2
```

Donc :

```js
students[2].nom
```

→ Omar

---

# 15. Ajouter un objet dans un tableau

C'est là que tu commences à voir le CRUD.

On a :

```js
let students = [
    { id: 1, nom: "Aya", age: 23 },
    { id: 2, nom: "Sara", age: 22 }
];
```

On veut ajouter Omar.

On fait :

```js
students.push({
    id: 3,
    nom: "Omar",
    age: 24
});
```

Maintenant :

```js
[
    { id: 1, nom: "Aya", age: 23 },
    { id: 2, nom: "Sara", age: 22 },
    { id: 3, nom: "Omar", age: 24 }
]
```

👉 C'est le **CREATE** du CRUD.

---

# 16. Modifier un objet dans le tableau

Par exemple, Sara a maintenant 25 ans.

```js
students[1].age = 25;
```

Avant :

```js
{ id: 2, nom: "Sara", age: 22 }
```

Après :

```js
{ id: 2, nom: "Sara", age: 25 }
```

👉 C'est **UPDATE**.

---

# 17. Supprimer un objet

Si tu connais son index :

```js
students.splice(1, 1);
```

Cela supprime l'objet à l'index `1`.

Avant :

```text
0 → Aya
1 → Sara
2 → Omar
```

Après :

```text
0 → Aya
1 → Omar
```

👉 C'est **DELETE**.

Mais dans un vrai CRUD, on ne connaît pas toujours l'index. On connaît souvent l'`id`.

Donc il faut d'abord **chercher l'objet**.

C'est pour ça qu'il est important de bien maîtriser les objets + tableaux + boucles avant le CRUD.

---

# 18. Les méthodes importantes avec les objets

Tu vas rencontrer plusieurs méthodes.

## `Object.keys()`

Donne les clés :

```js
let student = {
    nom: "Aya",
    age: 23
};

console.log(Object.keys(student));
```

Résultat :

```text
["nom", "age"]
```

---

## `Object.values()`

Donne les valeurs :

```js
console.log(Object.values(student));
```

Résultat :

```text
["Aya", 23]
```

---

## `Object.entries()`

Donne les paires clé/valeur :

```js
console.log(Object.entries(student));
```

Résultat :

```text
[
    ["nom", "Aya"],
    ["age", 23]
]
```

👉 Mais **ne te concentre pas trop dessus maintenant**. Pour ton niveau actuel, les bases sont beaucoup plus importantes.

---

# 19. Les objets peuvent avoir des fonctions

Un objet peut aussi contenir une fonction.

```js
let student = {
    nom: "Aya",

    direBonjour: function() {
        console.log("Bonjour");
    }
};
```

Pour appeler la fonction :

```js
student.direBonjour();
```

Résultat :

```text
Bonjour
```

Une fonction qui appartient à un objet s'appelle généralement une **méthode**.

Tu verras ça davantage quand tu étudieras la programmation orientée objet.

---

# 20. `this` — important mais pas maintenant ⭐

Tu peux avoir :

```js
let student = {
    nom: "Aya",

    direBonjour: function() {
        console.log("Bonjour " + this.nom);
    }
};
```

Puis :

```js
student.direBonjour();
```

Résultat :

```text
Bonjour Aya
```

Ici :

```js
this.nom
```

signifie essentiellement :

> la propriété `nom` de l'objet qui appelle cette méthode.

Mais **ne t'inquiète pas si `this` te semble bizarre maintenant**. Tu peux apprendre les objets sans maîtriser `this`.

---

# 21. Objet vs tableau

C'est une confusion très fréquente.

### Tableau

```js
let fruits = ["pomme", "banane", "orange"];
```

On utilise des **index** :

```js
fruits[0]
```

→ pomme

---

### Objet

```js
let student = {
    nom: "Aya",
    age: 23
};
```

On utilise des **propriétés** :

```js
student.nom
```

→ Aya

---

### Tableau d'objets

```js
let students = [
    { nom: "Aya", age: 23 },
    { nom: "Sara", age: 22 }
];
```

On combine les deux :

```js
students[0].nom
```

→ Aya

C'est **super important pour le CRUD**.

---

# 22. L'objet dans un vrai projet

Imagine une application de gestion de produits.

Un produit peut être :

```js
let product = {
    id: 1,
    name: "Laptop",
    price: 7000,
    category: "Informatique",
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
        name: "Souris",
        price: 150,
        stock: 25
    },

    {
        id: 3,
        name: "Clavier",
        price: 300,
        stock: 15
    }
];
```

Maintenant tu peux faire :

```text
CREATE → ajouter un produit
READ   → afficher les produits
UPDATE → modifier un produit
DELETE → supprimer un produit
```

💡 **Voilà pourquoi les objets sont essentiels pour comprendre un CRUD.**

---

# 🧠 Résumé à apprendre

Tu dois être à l'aise avec ces choses :

### ① Créer

```js
let student = {
    nom: "Aya",
    age: 23
};
```

### ② Lire

```js
student.nom
```

ou

```js
student["nom"]
```

### ③ Modifier

```js
student.age = 24;
```

### ④ Ajouter une propriété

```js
student.ville = "Youssoufia";
```

### ⑤ Supprimer une propriété

```js
delete student.ville;
```

### ⑥ Tableau d'objets ⭐⭐⭐

```js
let students = [
    { id: 1, nom: "Aya", age: 23 },
    { id: 2, nom: "Sara", age: 22 }
];
```

### ⑦ Accéder à un objet

```js
students[0]
```

### ⑧ Accéder à une propriété d'un objet

```js
students[0].nom
```

### ⑨ Parcourir

```js
for (let i = 0; i < students.length; i++) {
    console.log(students[i].nom);
}
```

---

## 🎯 Pour toi, l'ordre d'apprentissage

Je te conseille vraiment :

```text
Variables
   ↓
Conditions
   ↓
Boucles
   ↓
Fonctions
   ↓
Arrays
   ↓
Objects ← TU ES ICI
   ↓
Array of Objects ⭐
   ↓
Méthodes arrays (push, splice, find, filter...)
   ↓
CRUD
   ↓
DOM
   ↓
CRUD avec HTML + JavaScript
```
