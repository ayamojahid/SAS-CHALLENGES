/*$ en JavaScript
Le symbole $ n'a pas une seule signification.
 Il peut être utilisé comme un caractère normal dans les noms de variables :
 
 Le caractère ` Il s'appelle backtick. sert à créer des chaînes de caractères 
 multi-lignes et à interpoler des variables dans les chaînes de caractères. */

 //Au lieu d'utiliser des guillemets simples ou doubles pour créer une chaîne de
 //  caractères, vous pouvez utiliser des backticks (``) pour créer des chaînes de 
 // caractères multi-lignes et interpoler des variables à l'intérieur de la chaîne.

 //avec +
let nom = "Aya";
let age = 25;
console.log("bonjour " + nom + "age est  " + age ); // concaténation avec +

console.log("-----avec backticks------\n");

//avec backticks
console.log(`Bonjour ${nom} tu as ${age} ans`);