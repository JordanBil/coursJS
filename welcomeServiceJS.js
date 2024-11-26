export async function h1IntoJoke() {
    try {
       
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la blague !");
        }

        const data = await response.json();
        const joke = data.value;
        const title = document.getElementById("monTitre");
        if (title) {
            title.textContent = joke;
        }
    } catch (error) {
        console.error("Une erreur est survenue :", error);
    }
}
