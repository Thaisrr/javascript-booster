const tasks = [];
const ul = document.querySelector('#task-container');

const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = form[0].value.trim();
    if(inputValue) {
        tasks.push(inputValue);
        displayTask(inputValue);
        form.reset();
    }

});

/**
 * Afficher une nouvelle tâche dans le HTML
 * @param task
 */
function displayTask(task) {
    let li = document.createElement('li');
    li.textContent = task;
    console.log('element added : ');
    console.table(tasks)
    // envoyer l'array tasks à l'API pour le mettre à jour
    li = createDoneBtn(li);
    li = createDeleteBtn(li);
    ul.appendChild(li);
}

/**
 * Créer un bouton "done" qui barre la tâche dans le HTML
 * @param li
 * @return li avec le bouton
 */
function createDoneBtn(li) {
    const btn = document.createElement('button');
    btn.textContent = 'Done';
    btn.addEventListener('click', function () {
        li.classList.add('done')
    });
    li.appendChild(btn);
    return li;
}

/**
 * Créé un bouton "delete" qui supprime la tâche du HTML
 * @param li
 * @return li avec le bouton
 */
function createDeleteBtn(li) {
    const btn = document.createElement('button');
    btn.textContent = 'Del';
    btn.addEventListener('click', function () {
        const index = tasks.indexOf(li.textContent);
        tasks.splice(index, 1);
        console.log('element deleted : ')
        console.table(tasks);
        // Envoyer l'array tasks à l'API pour le mettre à jour
        ul.removeChild(li);
    });
    li.appendChild(btn);
    return li;
}

