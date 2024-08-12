const header = document.querySelectorAll('.tab-header');

for(let h of header) {
    h.addEventListener('click', function () {
        for(let tabHeader of header) {
            tabHeader.classList.remove('active')
        }

        for(let content of document.querySelectorAll('.tab-content')) {
            content.classList.remove('active');
        }

        h.classList.add('active');
        const id = 'tab' + h.dataset.tab;
        document.querySelector(`#${id}`).classList.add('active');
    })
}