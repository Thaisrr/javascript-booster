const fruits = ['peche', 'abricot', 'melon', 'pastèque'];

console.log( fruits[0] ); // peche
console.log( fruits[1] ); // abricot

fruits.push('fraise'); // Ajoute un éléménent à la fin du tableau
console.log(fruits);

const tab_vide = [];
console.log(tab_vide[0]); // undefined

console.log(`J'ai ${fruits.length} fruits dans mon tableau`);

// savoir si un élément est présent dans mon tableau : tab.includes("element à chercher")
console.log(`Est-ce que j'ai des framboise dans mon tableau ? ${fruits.includes('framboise')}`);

// Récupérer l'index de ma fraise :
const indexFraise = fruits.indexOf('fraise'); // 4
const indexMure = fruits.indexOf('mure'); // -1 -> ça n'existe pas

// Supprimer "melon" du tableau :
fruits.splice(2, 1); // je supprime 1 élément à partir de l'index 2 (inclu)
fruits.splice(2, 1, "raisin"); // je remplace 1 élément à partir de l'index 2 par "raisin"
fruits.splice(2, 0, "myrtille"); // J'insère un élément "myrtille" à l'index 2, sans remplacer
console.log(fruits); //[ 'peche', 'abricot', 'myrtille', 'raisin', 'fraise' ]

// Afficher tous les élements d'un tableau un par un :

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for(let f of fruits) {
    console.log(f);
}

fruits.forEach((f, index) => {
    console.log(`A l'index ${index} j'ai ${f}`);
})

fruits.forEach(function (f, index) {
    console.log(`A l'index ${index} j'ai ${f}`);
})


const numbers = [12, 45, 78, 0, 12, 5];

// Créer un nouveau tableau dont les éléments répondent à une condition donnée
// Ici, un nouveau tableau dont les nombres sont inférieurs à 20

const smallNumbers = numbers.filter((n) => n < 20);
/*const smallNumbers = numbers.filter(function (n) {
    return n < 20
}); */

// Créer un nouveau tableau en modifiant les éléments d'un premier tableau
// Ici un nv tableau qui multiplie par 10 les éléments du tableau number
const by10 = numbers.map((n) => n * 10);

// trier un tableau en ascii ( par ordre alphabétique )
numbers.sort();
console.log(numbers);

// Trier des nombres
// Croissant
numbers.sort((a, b) => a - b);

// Décroissant
numbers.sort((a, b) => b - a);
console.log(numbers)

// Change le sens du tableau
numbers.reverse();
console.log(numbers);
// Récupérer le premier élément du tableau qui répond à une condition
const id12 = numbers.indexOf(12); // 2

// Retourne le premier élémént du tableau qui est supérieur ou égal à 20
let index = numbers.findIndex((n) => n >= 20); // 4

let element = numbers.find((n) => n >= 20); // 45

// Transforme le tableau en string, en concaténant les éléments  :
let str = numbers.join(' < ');
console.log(str);

// Concaténer 2 tableaux sans modifier les tableaux existants
const numbers2 = [55, 123, 71];
const numbers3 = numbers.concat(numbers2);
console.table(numbers3);

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.table(arr1);

const vraiCopie = Array.from(arr1);
const vraiCopie2 = [...arr1];

function forEach(tableau, callback) {
    for(let el of tableau) {
        callback(el);
    }
}

forEach(numbers, function (n) {
    console.log(n);
})

