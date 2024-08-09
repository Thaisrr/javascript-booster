// Objet littéral
const composants = {
    carteGraphique: 'Nvidia truc',
    processeur: 'i7'
}

const ordinateur = {
    couleur: 'gris',
    ecran: 'lg machin chose',
    périphériques: ['souris-usb', 'imprimante'],
    coeur: 8,
    composantsPC: composants
}

console.log(`J'ai un ordinateur ${ordinateur.couleur}, avec un écran ${ordinateur.ecran}`);
console.log(ordinateur.clavier);

ordinateur.couleur = 'bleu';

ordinateur.clavier = 'clavier sans fil';
console.log(ordinateur.clavier);
console.log(ordinateur.composantsPC.carteGraphique);

console.log(ordinateur.périphériques[0]); // souris-usb

for(let periph of ordinateur.périphériques) {
    console.log(periph);
}

ordinateur.périphériques.forEach(function (periph) {
    console.log(periph);
})

console.log(ordinateur.composantsPC.carteGraphique)

for(let clef in ordinateur) {
    console.log(clef, '-------');
    console.log(ordinateur[clef]);
}

const user = {
    name: 'Jean Michel',
    email: 'jeanmich@mail.fr',
    id: 123,
    age: 7000,
}

// user = {} -> interdit,on a une constante
user.name = 'Jean Micheline'; // OK

const age = 18;

console.log(user.name.toUpperCase());

console.log(user.age);

if(user.age > 18) {
    console.log(`${user.name} est majeur`);
}

class Utilisateur {
    name;
    email;
    password;
    age;
    role;

    constructor(c_name, c_email) {
        this.name = c_name;
        this.email = c_email;
    }
}

const user1 = new Utilisateur('Toto', 'toto@mail.fr');
const user2 = new Utilisateur('Jane Doe', 'jdoe@mail.fr');

console.log(user1);
console.log(user1.name);
user1.password ="monsuperpassword";
user1.name = 'Titi';
console.log("-------------------");
console.log(user1);

class Ordinateur {
    ecran;
    peripherique;

    constructor() {} // constructeur vide donc optionnel : il existe toujours mais est implicite
}

const pc = new Ordinateur();
console.log(pc);
pc.ecran = 'un ecran';
pc.peripherique = ['souris'];
pc.carteGraphique = 'Nvdidia'; // On peut créer des propriétés à la volée - mais déconseillé
console.log(pc);

const pc2 = new Ordinateur(); // N'a pas de carte graphique

// ---------------------

class Tasse {
    color;
    contentMax;
    contenuReel;

    constructor(c_color, c_content) {
        this.color = c_color;
        this.contentMax = c_content;
        this.contenuReel = 0;
    }

    remplir() {
       this.contenuReel = this.contentMax;
    }

    vider() {
        this.contenuReel = 0;
    }

    vider2 = function() { this.contenuReel = 0}

    vider3 = () => this.contenuReel = 0;

    tchin(autreTasse) {
        console.log(`Je tchine la tasse ${this.color} contre la tasse ${autreTasse.color}`);
    }

}

const t = new Tasse('bleu', 200);
const t2 = new Tasse('rose', 350);
console.log(t.contenuReel); // 0
t.remplir();
console.log(t.contenuReel); // 200
t.vider();
console.log(t.contenuReel); // 0
t.tchin(t2);

const obj = {
    name: 'toto',
    value1() {console.log(this.name)},
    value2: function () {console.log(this.name)},
    value3: () => console.log(this.name)
}
console.log('----------------');
obj.value1();
obj.value3();


/***** Héritage *****/

/*
Employé : nom, prenom, email, job
Client : nom, prenom, email, entreprise
 */

class User {
    nom;
    prenom;
    email;

    constructor(nom, prenom, email) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
}

class Employe extends User {
    job;

    constructor(nom, prenom, job) {
        let email_created = `${nom}.${prenom}@montrentreprise.com`;
        super(nom, prenom, email_created); // constructeur du parent ( User )
        this.job = job;
    }
}

class Client extends User {
    entreprise;

    constructor(nom, prenom, email, entreprise) {
        super(nom, prenom, email);
        this.entreprise = entreprise;
    }
}

const employe1 = new Employe('La Tourte', 'Michou', 'développeur');
console.log(employe1);



/***** Les getters setters ****** */

class User2 {
    #id;
    nom;
    prenom;
    #email;
    #password;

    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    get id() {
        return this.#id;
    }

    get email() {
        return this.#email;
    }

    set email(new_email) {
        // instructions
        this.#email = new_email;
    }

    get password() {
        return this.#password;
    }

    set password(new_password) {
        // avant, je hash new_password;
        const hashed = `${new_password} hashé`;
        this.#password = hashed;
    }

    get nomComplet() {
        return `${u.nom} ${u.prenom}`;
    }

}

const u = new User2('Jean Micheline', 'prenom');
// u.#email = 'un super email';
u.password = 'password'; // on utilise un setter comme une propriété
console.log(u.password); // on ne met pas de parenthéses sur un getter

console.log(u.nomComplet);
console.log(u.nom);

/*
Créer la classe Article
- nom
- prix
Créer une classe panier :
- articles - une liste d'articles en privée, par défaut un tableau vide
    - ne peut pas être modifiée
    - elle peut être lue
- une méthode ( PAS un setter ) qui permet d'ajouter un article
- total, une valeur  calculée en prenant la somme des prix des articles (getter)

=> Créer quelques articles.
=> Les ajouter au panier
=> Afficher le total

const panier = new Panier();
console.log(panier.articles) doit afficher : []
console.log(panier.total) doit afficher 0


 */

class Animal {

}

/*** static ***/

class Felin extends Animal {
    nom;
    static nbFelins = 0;

    constructor(nom) {
        super();
        this.nom = nom;
        Felin.nbFelins++;
    }

    parler() {
        console.log('Miaou');
    }
}

const f1 = new Felin('Tigre')
const f2 = new Felin('Chat')
const f3 = new Felin('Lion')
console.log(`J'ai instancié ${Felin.nbFelins} félins`);

class Math {
    static PI = 3.14;

    static sum(a, b) {
        return a + b;
    }
}

console.log(Math.PI);
console.log(Math.sum(156, 456));

const PI = 3.14;
function sum(a, b)  {
    return a + b;
}

class ArticleService {
    static getArticle() {
        console.log('demande 1 article à l\'api');
    }

    static getArticles() {
        console.log('demande tous les articles à l\'api')
    }
}

/***** Override ****/

class Chat extends Felin {
    ronronner() {
        console.log('ron ron')
    }
}

const cat = new Chat('Cactus');
cat.parler();


class Tigre extends Felin {
    parler() {
        console.log('Grrrrr');
    }
}

const tiger = new Tigre('Baltazar');
tiger.parler();

/****** instance of *******/

const isCat = cat instanceof Chat;
console.log(isCat); // true

console.log( tiger instanceof Tigre); // true
console.log(cat instanceof Tigre); // false
console.log(cat instanceof Felin); // True car chat hérite de félin
console.log(tiger instanceof Felin); // true
console.log(cat instanceof Animal); // true