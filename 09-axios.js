axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(function (response) {
        console.log(response.data);
        const user = response
        console.log(user)
    }).catch(function (error) {
        if(error.response.status === 404) {
            alert('La ressource demandée n\'existe pas !')
        } else {
            alert('Oups, quelque chose s\'est mal passé !')
        }
    })


async function getUser(id) {
    try {
        // await, attends que la promesse soit résolue, et quand c'est bon, donne la valeur
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
        const user = response.data;
        console.log(user);
    } catch (error) {
        if(error.response.status === 404) {
            alert('La ressource demandée n\'existe pas !')
        } else {
            alert('Oups, quelque chose s\'est mal passé !')
        }
    }
}

getUser(1);
getUser(3);
getUser(10000);

/**
 * Récupérer les todos de l'user 1 qui sont complétés
 */
async function getTodosFiltered() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
            userId: 1,
            completed: true
        }
    });
    console.table(response.data);
}
getTodosFiltered();

/*
Créer une fonction qui permet de récupérer les posts d'un user dont l'id est passé en paramétre de la fonction.
Faire un console.table des posts récupérés.
 */