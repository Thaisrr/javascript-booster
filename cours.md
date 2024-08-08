# Javascript

- Langage orienté objet
- Sert à rendre des pages dynamiques
- API, des fronts ends complet, ...
- Interprété par le navigateur (V8 - chromium, Spider Monkey - firefox)
- Typage dynamique ( on a pas besoin de typer les variables explicitement ), 
- Typage permissif ( le type d'une variable peu changer en cours de route )

Les types de variables en JS : 
- entier / réel => Number
- String
- Boolean
- NaN ( not a number )
- Undefined
- null
- Array
- Object


## Déclarer une variable

On déclare une variable avec les mots clefs `let`, `const`ou `var`

La différence entre ces 3 mots clefs : 
- La portée : var à une portée de fonction, let et const ont une portée de block ( function, if, while, for..)
- const déclare une constante, on ne peut plus réaffecter de valeur ( avec =)

## Déclarer une fonction

Une fonction est une liste d'instructions qui peut retourner un résultat, qui a un nom, et qui est réutilisable.
Une fonctions peut avoir des arguments ou paramètres.
On se sert des fonctions pour découper son code en parties lisibles.

Une fonction qui fait un calcul doit retourner un résultat, la plupart du temps, on souhaite récupérer ce résultat pour le manipuler par la suite.

## Les blocks

### Conditions

Opérateurs de condition : > < === !== >= <= 
Opérateurs logiques : && || 

- if -> permet de faire quelque chose en fonction d'une condition. On peut faire autre chose sinon (else).
- switch -> permet de faire une action en fonction de la valeur d'une variable. Quand la variable à plusieurs valeurs possibles connues.

### Boucles

- while - si la condition passée est vrai, effectue l'action, et continue tant la condition reste vrai.
- for - pour effectuer une action un nombre de fois connu.
- do while - effectue l'action, et la recommence tant que la condition passée est vrai


## Le ternaire

Permet d'attribuer une valeur à une variable en fonction d'une condition.

## Falsy

0, null, undefined, false, "", ``, ''
=> Une valeur qui retourne "false" quand elle est explicitement testée ( dans une condition)
        -> dans un if, dans un ternaire, !, !!


## Les Arrays

Un tableau est une liste de données (souvent) de même type.

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

## Les objets

- chaise, ordinateur, 
- ordinateur : composants, couleur, écran, periphériques, carte graphique

-> En développement, un objet est une collection de propriétés qui va définir un élément.

```javascript
const ordinateur = {
    couleur: 'gris',
    ecran: 'lg machin chose',
    périphériques: ['souris-usb', 'imprimante'],
}
```
