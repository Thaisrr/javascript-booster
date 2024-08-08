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

    vider3 = () => this.contenuReel = 0; // NON

    tchin(autreTasse) {
        console.log(`Je tchine la tasse ${this.color} contre la tasse ${autreTasse.color}`);
    }

    valueThis() {
        console.log(this); // Correspond à l'objet sur lequel on est
    }

    valueThis2 = function () {
        console.log(this);
    }

    valueThis3 = () => {
        console.log(this);
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

t.valueThis();
t.valueThis2();
t.valueThis3();

const obj = {
    name: 'toto',
    value1() {console.log(this.name)},
    value2: function () {console.log(this.name)},
    value3: () => console.log(this.name)
}
console.log('----------------');
obj.value1();
obj.value3();