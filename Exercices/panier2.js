
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
    ul.appendChild(li);
    total += article.price;
}

const totalSpan = document.querySelector('#total');
totalSpan.textContent = total;

