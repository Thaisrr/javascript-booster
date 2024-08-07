function add(tableau, nouvelElement) {
    tableau.push(nouvelElement);
}

function remove(tableau, element) {
    const index = tableau.indexOf(element);
    tableau.splice(index, 1);
}

let arr = [];
// let again;
while (confirm('Voulez vous ajouter un élément ?')) { // ou (again)
    const input = prompt(`Ajouter un élément au tableau: ${arr.join(', ')} \n Pour supprimer un élément, tapez "supprimer element"`);
    if(input.includes("supprimer")) {
        const inputArray = input.split(' ') // "supprimer el" -> split(" ") -> [supprimer, el]
        const elementToDelete = inputArray[1];
        remove(arr, elementToDelete);
    } else {
        add(arr, input);
    }
    console.table(arr);
    //again = confirm('Voulez vous ajouter un élément ?');
}


