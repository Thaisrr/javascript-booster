const secretPassword = 'CaputDraconis';

const form = document.querySelector('#secretForm');
// const form = document.getElementById('secretForm');
let attempts = 0;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.querySelector('#password');
    const secret = document.querySelector('#secret');
    const error = document.querySelector('#error');
    if(input.value === secretPassword && attempts <= 3) {
        // afficher le message secret
        secret.style.display = 'block';
       // document.querySelector('#form-control').removeChild(error);
        error.textContent = '';
    } else if(attempts >= 3) {
        error.textContent = 'Compte bloqué !';
    } else {
        // const error = document.createElement('small');
        error.textContent = 'Mauvais mot de passe !';
        //error.id = 'error';
        //document.querySelector('#form-control').appendChild(error);
        attempts++;
        console.log(attempts);

    }

});