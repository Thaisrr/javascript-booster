/**** Selectionner un élément ***/

// Récupération par l'id :
const title = document.getElementById('title');
console.log(title); // réprésentation sous forme d'objet du h1 title

// Récupération par la classe
const p = document.getElementsByClassName('paragraphe');
console.log(p); // On récupère tous les paragraphes ayant la classe "p"
console.log(p[1]); // On récupère tous les paragraphes ayant la classe "p"
// On récupère une html Collection, qui se manipule comme une liste

// Récupération  par nom de balise
const pBis = document.getElementsByTagName('p');
console.log(pBis);
console.log(pBis[3]);

// Récupérer UN ( 1 ) élément par son selecteur CSS, le premier qu'il trouve
const pTer = document.querySelector('.paragraphe');
console.log(pTer);

const titleBis = document.querySelector("#title");

const p2 = document.querySelector('p:nth-child(2)');
console.log('---- p2 ----', p2);

// Récupérer plusieurs éléments par leur selecteur CSS
const allClassParagraph = document.querySelectorAll('div .paragraphe');
console.log(allClassParagraph);
// Les éléments sont cette fois dans une NodeList, qui se comporte aussi comme une liste.


function $(selector) {
    return document.querySelector(selector);
}

const title3 = $('#title');

function $$(selector) {
    return document.querySelectorAll(selector);
}

const allP = $$('p');

/******* Modifier le contenu de la balise *******/
console.log(title.textContent);

/**** a éviter d'utiliser ****/
console.log(title.innerText);

/**** Pour accéder au HTML, on l'utlise uniquement si on doit modifier le HTML, mais à éviter, il y a d'autres solutions. Peut causer des failles de sécurité. ****/
console.log(title.innerHTML);


/****** Modifier le style *********/
// font-size -> fontSize
// On a accès à tous les attributs CSS existants
title.style.color = 'red';

/**** Ajouter des classes *****/

title.className = 'maClasse';
title.classList.add('classB');
title.classList.remove('maClasse');
title.classList.toggle('classC'); // Ajoute si la classe n'existe pas, supprime si elle existe.



function addClass() {
    title.classList.toggle('classC'); // Ajoute si la classe n'existe pas, supprime si elle existe.
}

/* On peut modifier n'importe quel attribut HTML en JS */
title.id = 'nouvelId';
title.title = 'Un super titre';

/* créer des éléments HTML */
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Mon nouveau Paragraphe';
newParagraph.classList.add('uneClasse');

const parent = document.querySelector('div');
parent.appendChild(newParagraph);


/***** supprimer un élément ******/
const lastP = document.querySelector('#last');
parent.removeChild(lastP);

const liste = ['Walking Dead', 'Game of throne', 'Ratched', 'Russian Dolls'];
const ul = document.querySelector('#series');
for(let serie of liste) {
    const li = document.createElement('li');
    li.textContent = serie;
    ul.appendChild(li)
}

/*** Pour ajouter un élément au début du parent ***/

const newP2 = document.createElement('p');
newP2.textContent = 'Un nouveau paragraphe ajouté au début de la div';
parent.prepend(newP2);

/**** Ajouter un élément après un frère ****/

const frere = document.querySelector('#p2');
const newP3 = document.createElement('p');
newP3.textContent = 'Paragraphe ajouté après mon frère';
frere.after(newP3);

/**** Ajouter un élément avant un frère *****/
const newP4 = document.createElement('p');
newP4.textContent = 'Paragraphe ajouté avant mon frère';
frere.before(newP4);

/**** Window *******/
console.log(`Ma fenêtre ${window.innerHeight}px de haut, et ${window.innerWidth}px de large`);
console.log('Vous êtes sur l\'url : ', window.location);
console.log(window.scrollY);
console.log(window.scrollX);
console.log(window.navigator);

/**** LocalStorage *****/
/*** permet de stocker une string dans la mémoire locale du navigateur.
 La donnée elle reste même en fermant le navigateur ****/
localStorage.setItem('nom', 'Thaïs'); // enregistre un élément sous la forme clef - valeur
const nom = localStorage.getItem('nom'); // Récupérer un élément grace à sa clef
console.log(nom);
localStorage.removeItem('nom'); // Supprimer un élément précis grâce à sa clef
localStorage.clear(); // Supprimer tous les éléments

/**** Session Storage *****/
/*** Garde des données uniquement le temps de la session, puis supprime tout ***/
sessionStorage.setItem('preference', 'dark');
console.log(sessionStorage.getItem('preference'));
sessionStorage.removeItem('preference');
sessionStorage.clear();



