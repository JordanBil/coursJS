class imc {

    constructor(nom, poids, taille) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }
    
    getNom() {
        return this.nom;
    }

    getPoids() {
        return this.poids;
    }

    getTaille() {
        return this.taille;
    }

    displayImc() {
        let imc = this.poids / (this.taille ** 2);
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



