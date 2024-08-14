async function getCharacters() {
    const response = await axios.get('https://swapi.dev/api/people');
    const characters = response.data.results;
    console.table(characters);

    for(let char of characters) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.textContent = char.name;
        // afficher la taille
        const heightP = document.createElement('p');
        heightP.textContent = `Taille : ${char.height}`;
        div.appendChild(heightP);
        // afficher l'age
        const yearP = document.createElement('p');
        yearP.textContent = `Naissance : ${char.birth_year}`;
        div.appendChild(yearP);
        // récupérer la planète
        const homeworldResponse = await axios.get(char.homeworld);
        const homeworld = homeworldResponse.data.name;
        const homeP = document.createElement('p');
        homeP.textContent = `Planéte : ${homeworld}`;
        div.appendChild(homeP)

        document.querySelector('#container').appendChild(div)
    }

}

getCharacters();