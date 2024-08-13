const formulaire = document.querySelector('#form');
formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // éviter le rechargement de la page
    console.log('saving form');
    const nom = document.querySelector('#nom'); // on récupère l'élément HTML
    console.log('Vous avez tapé,', nom.value);

});


let hasError = {
    nom: true,
    email: false,
}

const form2 = document.querySelector('#form2');
form2.addEventListener('submit', function (event) {
    event.preventDefault();
    const login = {
        name: '',
        email: ''
    };
    // On peut accéder aux inputs dans un tableau que contient form
    if(!Object.values(hasError).includes(true)) {
        login.name = form2[0].value;
        login.email = form2[1].value;
        console.log(login);
    }

});

document.querySelector('#nom2').addEventListener('blur', function (event) {
    const input = event.target;
    const value = input.value;

    if(!value || value.length < 2) {
        input.style.borderColor = 'red';
        let error = input.nextElementSibling;
        if(!error) { // ne s'effectue qu'une fois, la première fois qu'on rentre dans le if
            error = document.createElement('small');
            error.style.color = 'red';
            input.after(error);
        }
        error.textContent = 'Veuillez entrer un nom valide';
        hasError.nom = true;
    } else {
        hasError.nom = false;
        const error = input.nextElementSibling;
        if(error) {
            error.textContent = '';
        }
    }
});


/*
Créer un mot de passe en Javascript ( dans une variable )
Créer un formulaire avec un champs input password.
Créer un message caché en display none dans le HTML
Quand l'user valide le formulaire, vérifier si la valeur de l'input correspond au mot de passe.
Si non : afficher un message d'erreur
Si oui : afficher le message caché. Et supprimer les messages d'erreur.

Bonus: au bout de 3 tentatives ratées, le compte est bloqué
-> le message secret ne s'affiche plus jamais.
 */

