class imc {

    nom;
    poids;
    taille;

    constructor(nom, poids, taille) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    // Méthode pour obtenir le nom de l'animal
    getNom() {
        return this.nom;
    }

    // Méthode pour obtenir l'âge de l'animal
    getPoids() {
        return this.poids;
    }

    getTaille() {
        return this.taille;
    }

    // Méthode pour afficher les informations de l'animal
    displayImc() {
        let imc = this.poids / (this.taille * this.taille);
        console.log(`l'IMC de ${this.nom} (${this.poids} kg, ${this.taille} m ) est de ${imc.toFixed(2)}`);       
    }
}

let list = [
    new imc("Sébastien Chabal", 135, 1.7),
    new imc("Escaladeuse", 45, 1.68),
    new imc("JOJO", 300, 2),
    new imc("gontrand", 90, 1.75),
    new imc("Colonel Clock", 200, 1.75),
    new imc("Josiane de la Véga", 99, 1.55),
];

list.forEach((person) => {
    person.displayImc();
});



