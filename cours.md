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

## Les classes

Un ensemble de propriétés et de méthodes qui permettent de créer des objets.
Une classe à une constructeur, qui permet de définir des valeurs à la création d'un objet.

```javascript
const object = new MaClasse('valeur1', 'valeur2'); // On appelle le constructeur de la classe
```

Une méthode, c'est une fonction propre à une classe.

Une classe peut hériter d'une autre classe avec le mot clef `extends`.
Elle hérite de toutes les propriétés et toutes les méthodes de la classe parente,
Elle peut ajouter ses propres propriétés et méthodes.

Dans le constructeur d'une classe enfant, il faut appeler le constructeur du parent avec le mot clef `super()`;

On peut rendre une propriété privée en la préfixant d'un `#` : 
Elle ne sera alors plus accessible en dehors de la classe.

Pour accéder aux propriétés privées, ou à des valeurs calculées, on peut utiliser les getters : 
Un getter ne prend jamais de paramétre.
```javascript
get maPropriete() {
    return this.propriete;
}
```

Pour modifier une propriété privée, ou modifié en appliquant des calcules ou autre, on peut utiliser les setters : 
Un setter à toujours besoin d'un paramètre.
```javascript
set maPropriete(nouvelle_valeur) {
    this.propriete = nouvelle_valeur;
}
```

=> On parle d'instancier un objet quand on le créé avec le `new`
Une instance d'une classe est un objet d'une classe.


Une propriété static ou une méthode static, c'est une propriété qui est affiliée non pas à une instance d'un objet
mais à une classe.

C'est à dire que je n'ai pas besoin d'instancier, de créer un objet pour me servir de la méthode, ou de la propriété.

On s'en sert beaucoup dans les classes utilitaires.

Pour s'en servir, on utilise le nom de classe point la propriété
```javascript
MaClasse.proprieteStatique;
```

`instance of` est un mot clef qui permet de retourner un boolean.
Il va tester un objet, et vérifier si cet objet est un instance d'une classe donnée.

## Le DOM

- Permet de manipuler le HTML en Javascript
- Document Object Model : une representation structurée du document, sous forme d'arbre.
- Le document est un objet, qui a ses attributs, et ses méthodes.

```javascript
document.methode()
```

### Accéder à un élément

Un seul élément : 
```javascript
document.querySelector('selecteur css')
```

Plusieurs éléments : 
```javascript
document.querySelectorAll('selecteur css')
```

### Créer un élément : 

```javascript
const monElement = document.createElement('balise à créer');
```

L'élément créé peut ensuite recevoir du texte, ou des attributs html (`text-content`, `style`, `classList`);
```javascript
monElement.textContent = 'Mon Contenu';
monElement.classList.add('maClasse');
monElement.id = "unID";
```

Il faut ensuite ajouter l'élément dans le dom. Pour ça, on part du parent.
Pour intégrer l'élément à la fin du parent, en dernier enfant, on utilise `append` ou `appendChild`
```javascript
parent.appendChild(monElement);
parent.prepend(monElement);
```

On peut également partir des frères avec : 
```javascript
frere.before(monElement);
frere.after(monElement);
```

## Les événements

Il existe plusieurs types d'événements : 
- click
- scroll
- mouseover
- mouseleave
- mouseenter
- focus
- blur
- submit
- keyup
- keydown
- keypress
- ...

Pour accéder à ces événements, on a 2 solutions: 
- Soit depuis le HTML, `on` + le nom de l'événement sur une balise, pui son appelle la fonction associée
- Soit depuis le Javascript, on utilise un écouteur d'événement, et on lui passe une fonction à éxécutée (une callback)

```html
<button onclick="maFonction()">
```

```javascript
const btn = document.querySelector('button');
btn.addEventListener('click', function (event) {
    // mon code de fonction
});
```

## Dataset

Pour ajouter des informations depuis le HTML
```html
<div id='div' data-lang="fr">Bla bla</div>
```

On utilise le mot clef `data-` + un nom choisi ( en kebab case )

On peut s'en servir comme selecteur dans le CSS.

On peut aussi y accéder dans le Javascript : 
```javascript
const div = document.querySelector('#div');
const langue = div.dataset.lang; // contient "fr"
```