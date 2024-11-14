

let titre = document.querySelector(".monTitre");
let monToggle = false;

 titre.addEventListener("click" ,()=>{
    titre.innerText = monToggle ? '-- 🥳 --':'D.O.M Events';

    monToggle = !monToggle;
 })


let ajouter = document.querySelector(".ajouter");
let supprimer = document.querySelector(".supprimer");
let toggle = document.querySelector(".toggle");

ajouter.addEventListener("click" ,()=>{
    titre.classList.add('monStyle');
});

supprimer.addEventListener("click" ,()=>{
    titre.classList.remove('monStyle');
});

toggle.addEventListener("click" ,()=>{
    titre.classList.toggle('monStyle');
} );



document.addEventListener("click" ,function(event){
    let x = event.clientX;
    let y = event.clientY;
    let image = document.createElement('img');
    let tailleIMG = 100;
    image.src = "./coeur.png";
    image.style.position = "absolute";
    image.style.width = tailleIMG + 'px';
    image.style.left = event.x - tailleIMG /2 + 'px' ;
    image.style.top = event.y - tailleIMG /2 + 'px' ;
    document.body.appendChild(image);
}) ;

VANTA.FOG({
    el: "#app",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})

  laBar = document.querySelector(".bar");

    document.addEventListener("scroll" , ()=>{
    console.log(document.body.scrollHeight, window.innerHeight, window.scrollY);
    scrollMax = document.body.scrollHeight - window.innerHeight;
    onEstOu = window.scrollY/scrollMax;
    laBar.style.width = onEstOu*100 + "%" ; 
  })

  monForm = document.querySelector("#msg");
  ligne = document.querySelector(".magic");

  monForm.addEventListener("keyup", function(){
    
    ligne.textContent = monForm.value;
    localStorage.setItem("MonLocal",ligne.textContent);
    
  });

  window.addEventListener("load", () => {
    console.log("La page est complètement chargée");
  
    monLocal = localStorage.getItem("MonLocal");
    monForm.value = monLocal;
  });

  const apiDiv = document.querySelector('.apiContact');

        const contactApi = async () => {

            try {
                
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
                
                
                if (!response.ok) {
                    throw new Error('Erreur de récupération des données');
                }

                const reponseJSON = await response.json();
                              
                const pokemonList = reponseJSON.results;
               
                pokemonList.forEach(pokemon => {
                    const pokemonItem = document.createElement('div');
                    pokemonItem.classList.add('pokemon-item');
                    pokemonItem.innerText = pokemon.name; 
                    apiDiv.appendChild(pokemonItem); 
                });

            } catch (error) {
                console.error('Erreur:', error); 
                apiDiv.innerText = 'Une erreur est survenue lors de la récupération des Pokémon.';
            }
        };
        
        contactApi();





  
