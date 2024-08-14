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

/**
 * Récupérer un utilisateur, afficher son nom dans la console
 * Puis afficher ses todos dans la console.
 */


async function getUserAndTodos(id) {
    const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
    const user = userResponse.data;
    console.log("------Taches de ", user.name);
    const todosResponses = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
            userId: id,
        }
    });
    console.table(todosResponses.data)
}

getUserAndTodos(1);
getUserAndTodos(9);