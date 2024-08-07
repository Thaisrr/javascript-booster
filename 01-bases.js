// Déclarer une variable

// variables globales : à la racine du fichier, disponible partout dans le fichier.
let a = 1;
var b = 1;
const c = 3.14;

function maFonction() {
    let d = 35;
    var e = 12;
}

// console.log(d) -> erreur
// console.log(e) -> erreur

if(true) {
    let f = 'toto';
    var g = 'titi';
}

// console.log(f); // erreur
console.log(g); // OK

// c = 15; erreur
a  = 2; // OK


// Créer une fonction :

function sayHello() {
    console.log("Hello World");
}

sayHello();
sayHello();
sayHello();

function sum(a, b) {
   console.log(a + b);
}

sum(1, 1);
sum(1254, 45664);

function multiply(a, b) {
    return a * b;
}

let result = multiply(456, 456);
console.log(result);

sum(result, 20);

// En JS, on peut enregistrer des fonctions dans des variables.

const division = function (a, b) {
    return a / b;
}

const resultDivision = division(15, 5); // 3
console.log(resultDivision); // 3

console.log( division(568, 789) );


// Les fonctions fléchées

const soustraction = (a, b) => {
    // instructions
    return a - b;
}

// Une fonction qui n'a qu'une ligne peut s'écrire sans accolades. Le retour est implicite.
const soustraction2 = (a, b) => a - b;

console.log( soustraction(5, 2) ); // 3
const resultatSoustraction = soustraction(15, 5);
console.log(resultatSoustraction);



if( resultatSoustraction > 10 ) {
    console.log("le résultat est supérieur à 10");
} else if (resultatSoustraction === 10) {
    console.log("le résultat est égal à 10")
} else {
    console.log("le résultat est inférieur 10");
}

let status = 'preparation'; // 'preparation' | 'livrée' | 'en livraison' | 'annulée'

switch (status) {
    case "preparation":
        console.log('Votre commande est en cours de préparation');
        break;
    case "en livraison":
        console.log("Votre commande est en cours de livraison");
        break;
    case "livrée":
        console.log("Votre commande est livrée");
        break
    case "annulée":
        console.log("commande annulée");
        break
    default:
        console.log('Il se passe qqchose de chelou avec votre commande');
}

console.log("1" == 1); // true
console.log("1" === 1); // false

// Les boucles

while (!confirm('Voulez-vous confirmer ?')) {
    alert("Alleeeeeeeeeer !!!!!!!!!!");
}

let i = 10;
while (i > 0) {
    console.log(i);
    i--; // i = i - 1
}

do {
    alert("Voulez-vous continuer ?");
} while (!confirm('Oui ou non ?'));


// For

for(let i = 0; i <= 10; i++) {
    console.log(i);
}


let age = 15;
let isMajeur;

if(a >= 18) {
    isMajeur = true;
} else {
    isMajeur = false;
}

// WTF      What ?  valeur si true : valeur si false
isMajeur = (age >= 18) ? 'oui' : 'non';


// Sucre syntaxique

let age2 = prompt('Quel est votre age ?'); // 0

if(age2 === undefined || age === null) {
    age2 = 20;
}

// Pour affecter une valeur à une variable, si la variable est undefined ou null
age2 ??= 20;

// Pour affecter une valeur à une variable si elle est falsy
let maVariable = 0;
maVariable = maVariable || 'valeur par défaut';
maVariable ||= 'valeur par défaut';

// Pour affecter une valeur à une variable si elle truthy
maVariable = maVariable && 'nouvelle valeur';
maVariable &&= 'nouvelle valeur';

console.log(age2); // 20

console.log(!!age2); // true