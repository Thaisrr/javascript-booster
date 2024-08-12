const headers = document.querySelectorAll('.accordeon-header');

for (let h of headers) {
    h.addEventListener('click', function (event) {
        const content = h.nextElementSibling;
        if(content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }

        // WTF ? -> ternaire
        //content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
}