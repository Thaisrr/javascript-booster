/*
Créer une classe armure avec un nom, résistance
Créer une classe arme avec un nom, dégat

Créer une classe Personnage avec les propriétés suivantes :
nom,
pv
xp
lvl
arme
armure

-> Créer un nouveau personnage avec un nom et afficher ses caractèristiques (son nom, le reste est undefined. )
-> Créer une arme et une armure, et les assigner au personnage
 */

class Arme {
    nom;
    degats;

    constructor(c_nom, c_degats) {
        this.nom = c_nom;
        this.degats = c_degats;
    }
}

class Armure {
    nom;
    resistances;

    constructor(c_nom, c_resistance) {
        this.nom = c_nom;
        this.resistances = c_resistance;
    }
}

class Personnage {
    nom;
    pv;
    xp;
    lvl = 1;
    arme;
    armure;

    constructor(c_nom) {
        this.nom = c_nom;
        this.arme = new Arme('Vieux gourdin pourri', 10);
        this.armure = new Armure('Tunique élimée', 5);
        this.xp = 0;
        this.pv = 100;
    }
}

const perso = new Personnage('Mithrandir');
perso.arme = new Arme('Epée rouillée', 12);