

let titre = document.querySelector(".monTitre");
let monToggle = false;

 titre.addEventListener("click" ,()=>{
    titre.innerText = monToggle ? '-- 🥳 --':'D.O.M Events';

    monToggle = !monToggle;
 })

let mesLiens = document.querySelectorAll(".superLien");
let ajouter = document.querySelector(".ajouter");
let supprimer = document.querySelector(".supprimer");
let toggle = document.querySelector(".toggle");
let ternaire = false ;



ajouter.addEventListener("click" ,()=>{
    titre.classList.add('monStyle');
});

supprimer.addEventListener("click" ,()=>{
    titre.classList.remove('monStyle');
});

toggle.addEventListener("click" ,()=>{
    titre.classList.toggle('monStyle');
} )

