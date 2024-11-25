class Salarie {

    constructor(nom, prenom, age, salaire) {
        this.nom = nom;
        this.age = age;
        this.salaire = salaire;
    }
    
    getNom() {
        return this.nom;
    }

    getPrenom() {
        return this.prenom;
    }

    getAge() {
        return this.age;
    }

    getSalaire() {
        return this.salaire;
    }

    calculSalaireAnnuel() {
       let salaireAnnuelSansFrais =  this.salaire * 12;
       let salaireAnnuel = salaireAnnuelSansFrais * 1.9;
       return salaireAnnuel;
    }

}

class Pme {

    constructor(nom, equipe, revenu, fraisFixe, fraisAchat) {
        this.nom = nom;
        this.equipe = equipe;
        this.revenu = revenu;
        this.fraisFixe = fraisFixe;
        this.fraisAchat = fraisAchat;
    }
    
    getNom() {
        return this.nom;
    }

    getEquipe() {
        return this.equipe;
    }

    getRevenu() {
        return this.revenu;
    }

    getFraisFixe() {
        return this.fraisFixe;
    }

    getFraisAChat() {
        return this.fraisAchat;
    }

    coutEquipe() {
        let total = 0;
        this.equipe.forEach(person => {
            total += person.calculSalaireAnnuel();
        });
        return total;
    }

    coutInitial() {
        let result = this.fraisAchat + this.fraisFixe;
        return result;
    }

    bilanCalculed() {
        const coutEquipeTotal = this.coutEquipe();
        const coutInitial = this.coutInitial();
        const bilan = this.revenu - (this.fraisFixe + this.fraisAchat + coutEquipeTotal);

        console.log(
            "-------------------MA PME ----------------\n" +
        "Ma Petite Entreprise - : Cout initial : " + coutInitial + "\n" +
        "Ma Petite Entreprise - : Cout total Equipe : " + coutEquipeTotal + "\n" +
        "Ma Petite Entreprise - : VENTES : " + this.revenu + "\n" +
        "Ma Petite Entreprise - : BILAN : " + bilan + "\n" 
        );
    }

}

const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Salarie("Duval", "Paul", 30, 2000),
    new Salarie("Durand", "Alain", 40, 3000),
    new Salarie("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
pme.bilanCalculed();


