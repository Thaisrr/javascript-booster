const divs = document.querySelectorAll('div');

for (let d of divs) {
    d.addEventListener('click', function (event) {
        alert(`${d.dataset.lang} - ${d.dataset.flag}`)
    });
}