function play() {
    let allumettes = 21;
    let player = 1;
    alert(`Bienvenue dans le jeu des allumettes. \n Il y a 21 allumettes. \n ....`);
    while (allumettes > 0) {
        let take = 0;
        if(player === 1) {
            take = computerPlay(allumettes);
            player = 2;
        } else {
            take = userPlay(allumettes);
            player = 1;
        }
        allumettes = allumettes - take;
        // allumettes -= take;
    }
    if(player === 1) {
        alert('Vous avez perdu')
    } else {
        alert('Vous avez gagné')
    }
}

function userPlay(nbAllumettes) {
    let input = 0;
    while (input < 1 || input > 3) {
        input = +prompt(`Il reste ${nbAllumettes}, combien en prenez vous ? ( entre 1 et 3 )`);
    }
    return input;
}

function computerPlay(nbAllumettes) {
    alert(`Il reste ${nbAllumettes}. Au tour de l'ordinateur`);
    if(nbAllumettes === 1 || nbAllumettes === 2) return 1;
    if(nbAllumettes === 3) return 2;
    return Math.floor(Math.random() * 3) + 1; // retourne un nombre entre 1 et 3
}

do {
    play()
} while (confirm('Rejouer ?'))