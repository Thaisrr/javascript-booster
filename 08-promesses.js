function getRessource() {
    const ok = false;

    return new Promise((resolve, reject) => {
        if(ok) {
            resolve('Ceci est une information très importante !')
        } else {
            reject(new Error(`L'information demandée n'est pas disponible !`))
        }
    })
}

const promise = getRessource();
console.log(promise);

console.log('1')
let ressource;
/* communication asynchrone */
getRessource()
    .then(function (data) {
        // quand la promesse fonctionne ( resolve )
        console.log(data);
        ressource = data;
        // tous ce que je veux faire avec la donnée, je dois le faire ici,
        // dans le .then()
        const p = document.createElement('p')
        p.textContent = data;
        document.querySelector('body').appendChild(p);
    })
    .catch(function (error) {
        // quand la promesse reject ( retourne une erreur )
        alert(error);
        // afficher un message d'erreur à l'utilisateur
    })
    .finally(function () {
        // la promesse s'est terminée ( que ce soit avec une erreur, ou une donnée )
        console.log('opération terminée');
    })


/**** autre syntaxe ES *****/

// Fonction asynchrone

async function handleRessource() {
    try {
        let ressource2 = await getRessource();
        console.log(ressource2);
        const p = document.createElement('p')
        p.textContent = ressource2;
        document.querySelector('body').appendChild(p);
    } catch (error) {
        alert(error);
    } finally {
        console.log('opération terminée');
    }
}

handleRessource();


console.log(2);
console.log(ressource); // undefined

