const fruits = ['Pomme', 'Poire', 'Orange', 'Raisin', 'Banane'];

const ul = document.querySelector('#liste')

function displayListe(liste) {
    for(let f of liste) {
        const li = document.createElement('li');
        li.textContent = f;
        ul.appendChild(li);
    }
}

function deleteAllInUl() {
    while(ul.lastChild) {
        ul.removeChild(ul.lastChild)
    }
}


displayListe(fruits);

const form = document.querySelector('#search');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = form[0].value.toLowerCase();
    const filtered = fruits.filter(f => f.toLowerCase().includes(inputValue));
    /*const filtered = fruits.filter(function (f) {
        return f.toLowerCase().includes(inputValue);
    })*/
    ul.innerHTML = '';
    displayListe(filtered);
})