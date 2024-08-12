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

/**** Ppur accéder au HTML, on l'utlise uniquement si on doit modifier le HTML, mais à éviter, il y a d'autres solutions. Peut causer des failles de sécurité. ****/
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
