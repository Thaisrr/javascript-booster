class Article {
    nom;
    prix;

    constructor(c_nom, c_prix) {
        this.nom = c_nom;
        this.prix = c_prix
    }
}

class Panier {
    #articles;
   // #articles = []; -> si on ne veut pas passer par le constructeur

    constructor() {
        this.#articles = [];
    }
    // Un getter pour une propriété privée ( #) on le nomme comme la proprité sans le #
    get articles() {
        return this.#articles;
    }

    add(new_article) {
        this.#articles.push(new_article);
    }

    get total() {
        /*
        let result = 0;
        for(let art of this.#articles) {
            result = result + art.prix;
            // result += art.prix;
        }
        return result;
         */

        /*** */
        /*
        let result = 0;
        for(let i = 0; i < this.#articles.length; i++) {
            result = result + this.#articles[i].prix;
        }
        return result;
         */
        let result = 0;
        this.#articles.forEach(art => {
            result += art.prix;
        });
        return result;
    }
}

const art1 = new Article('Ordinateur portable', 799);
const art2 = new Article('Clavier sans fil', 40);
const panier = new Panier();
// console.log(panier.#articles); // Interdit
console.log(panier.articles);

panier.add(art1);
panier.add(art2);
console.log(panier.articles);
console.log(panier.total);