async function getCharacters(url) {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    const response = await axios.get(url);
    const characters = response.data.results;
    const nextPageUrl = response.data.next;
    const prevPageUrl = response.data.previous;
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

        container.appendChild(div)
    }

    if(prevPageUrl) {
        console.log('in if')
        const btn = document.createElement('button')
        btn.textContent = 'Page Précédente';
        btn.addEventListener('click', function() {
            getCharacters(prevPageUrl)
        });
        container.appendChild(btn)
    }

    if(nextPageUrl) {
        console.log('in if')
        const btnNext = document.createElement('button')
        btnNext.textContent = 'Page Suivante';
        btnNext.addEventListener('click', function() {
            getCharacters(nextPageUrl)
        });
        container.appendChild(btnNext)
    }



}

const apiURL = 'https://swapi.dev/api/people'
getCharacters(apiURL);

