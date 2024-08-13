
const panier = [
    {product: 'Fraises', price: 4},
    {product: 'Ordinateur', price: 799},
    {product: 'Pâtes', price: 3},
];

const ul = document.querySelector('#panier');
let total = 0;
for(let article of panier) {
    const li = document.createElement('li');
    li.textContent = `${article.product} -- ${article.price}€`;
    const btn = document.createElement('button');
    btn.textContent = 'Supprimer';
    btn.addEventListener('click', function () {
        total -= article.price;
        updateTotal();
        // Supprimer de la liste panier
        const index = panier.indexOf(article);
        panier.splice(index, 1);
        // Supprimer du HTML
        ul.removeChild(li);
    });
    li.appendChild(btn);
    ul.appendChild(li);
    total += article.price;
}

function updateTotal() {
    const totalSpan = document.querySelector('#total');
    totalSpan.textContent = total;
}

updateTotal();

/*
panier.html / panier2.js
Sur chaque ligne d'article, ajouter un bouton "supprimer"
Qui supprime l'élément de la liste panier, et qui supprime la ligne concernée en HTML
 */
