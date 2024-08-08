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


-> lvl par défaut 1
-> xp par défaut 0
-> pv par défaut à 100

- Créer une méthode présenter qui présente le personnage et ses statistiques

- Créer une methode ( fonction de classe ) attaquer, qui prend en paramétre un autre personnage B et qui lui inflige des dégats
 -> dégats arme du personnage A - resistance de l'armure du personnage B
        -> Arme de 10 dégat, armure de 5 -> 5pv en moins
 -> Retirer les points de vie du personnage B
 -> Si il est à 0, afficher "Nom du personnage est mort"
 -> Afficher Nom Du Personnage à perdu x dégats
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