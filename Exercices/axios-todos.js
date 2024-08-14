axios.get('https://jsonplaceholder.typicode.com/todos')
.then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    alert(error)
});

async function getTodos() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        displayTodos(response.data);
        return response.data; // retourne une promesse qui contient response.data ( donc ici, ce return est inutile )
    } catch (error) {
        alert(error.message)
    }
}

getTodos();

function displayTodos(todos) {
    for(let td of todos) {
        const p = document.createElement('p');
        p.textContent = td.title;
        document.querySelector('body').appendChild(p);
    }
}
