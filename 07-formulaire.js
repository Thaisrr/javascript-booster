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

/*
Créer une liste en javascript
Afficher dans le HTML tous les éléments de la liste grâce à javascript
Créer un formulaire avec un input et un bouton dans le HTML.
Quand on valide le formulaire, filtrer la liste pour n'afficher que
les éléments qui contienne la chaîne de caractère
 passée en input
 */

/*
- Créer une liste vide en JS
- En HTML, créer un formulaire avec un input
- A la validation du formulaire, ajouter la valeur de l'input dans la liste
- Afficher la liste OU le nouvel élément
- Ajouter un bouton pour supprimer l'élément de la liste
- Ajouter un bouton pour valider un élément de la liste ( le barrer )
( en ajoutant une classe par exemple, ou un style )
 */