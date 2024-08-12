function handleClick() {
    alert('BOOM !')
}
const btn = document.querySelector('#btn');
console.log('BTN avant chargement', btn); // null

function handleSubmit() {
    console.log('Formulaire envoyé')
}

document.addEventListener('DOMContentLoaded', function () {
    // appliquer toutes les modifications sur le DOM
    // Appeler les éléments du DOM

    const btn = document.querySelector('#btn');
    btn.addEventListener('click', function (event) {
        console.log(event);// objet événement
        event.stopPropagation();
        alert('Pas Boom')
    });
    console.log('BTN après chargement', btn);

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('rechargement de la page annulé');
        console.log('gestion des données du formulaire');
        console.log(event.target); // l'élément qui à envoyé l'événement
    });

    document.addEventListener('scroll', function () {
        console.log('scroll à : ', window.scrollY);
        if(window.scrollY > 0) {
            document.querySelector('body').style.backgroundColor = 'aqua';
        } else {
            document.querySelector('body').style.backgroundColor = 'white';
        }
    })

    document.addEventListener('keyup', function(e) {
        console.log("appuie sur la touche : ", e.key);
        if(e.key === "ArrowDown") {
            console.log('Avancer vers le bas')
        } else if(e.key === 'ArrowUp') {
            console.log('Avancer vers le haut')
        }
    });

    document.addEventListener('mousemove', function (e) {
        if(e.y < 70) {
            alert('Voulez vous vraiment partir ?')
        }
    })
});





