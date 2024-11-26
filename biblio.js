class Livre {
    constructor(titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
        this.disponible = true; 
    }

    emprunter() {
        if (!this.disponible) {
            throw new Error(`Le livre "${this.titre}" n'est pas disponible.`);
        }
        this.disponible = false;
    }

    retourner() {
        this.disponible = true;
    }
}

class Bibliotheque {
    constructor(nom) {
        this.nom = nom;
        this.livres = []; 
    }

    ajouterLivre(livre) {
        this.livres.push(livre);
    }

    emprunterLivre(titre) {
        const livre = this.livres.find(l => l.titre === titre);
        if (!livre) {
            throw new Error(`Le livre "${titre}" n'existe pas dans la bibliothèque.`);
        }
        livre.emprunter();
        console.log(`Le livre "${titre}" a été emprunté avec succès.`);
    }

    retournerLivre(titre) {
        const livre = this.livres.find(l => l.titre === titre);
        if (!livre) {
            throw new Error(`Le livre "${titre}" n'existe pas dans la bibliothèque.`);
        }
        livre.retourner();
        console.log(`Le livre "${titre}" a été retourné avec succès.`);
    }
}

try {
    const bibliotheque = new Bibliotheque("Bibliothèque Municipale");

    const livre1 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry");
    const livre2 = new Livre("1984", "George Orwell");
    const livre3 = new Livre("Les Misérables", "Victor Hugo");

    bibliotheque.ajouterLivre(livre1);
    bibliotheque.ajouterLivre(livre2);
    bibliotheque.ajouterLivre(livre3);

    bibliotheque.emprunterLivre("1984"); 
    bibliotheque.retournerLivre("1984"); 
    
    bibliotheque.emprunterLivre("Le Hobbit"); 
} catch (error) {
    console.error(error.message);
}

