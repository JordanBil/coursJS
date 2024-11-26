const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

let mail = document.querySelector("#email");
let mdp = document.querySelector("#password");
let result = document.querySelector("#message");
let resultMdp = document.querySelector("#messageMdp");

mail.addEventListener("keyup", function() {
    const valueMail = mail.value;

    if (regex.test(valueMail)){
        result.textContent = "Adresse email valide ✅";
        result.classList.remove("pasOk");
        result.classList.add("ok");
    } else if (valueMail === ""){
        result.textContent = "Bah tape un truc !";
        result.classList.remove("ok", "pasOk");
    } else {
        result.textContent = "Adresse email invalide ❌";
        result.classList.remove("ok");
        result.classList.add("pasOk");
    }
});


const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

mdp.addEventListener("keyup", function() {
    const valueMdp = mdp.value;

    const number = document.getElementById("number");
    if (charDecimal.test(valueMdp) && number) {
        number.remove();
    }

    const maj = document.getElementById("maj");
    if (/[A-Z]/.test(valueMdp) && maj) {
        maj.remove();
    }

    const special = document.getElementById("special");
    if (charSpecial.test(valueMdp) && special) {
        special.remove();
    }

    const lengthMin = document.getElementById("lengthMin");
    const lengthMax = document.getElementById("lengthMax");
    if (valueMdp.length >= 4 && lengthMin) {
        lengthMin.remove();
    } else if (valueMdp.length > 10 && lengthMax){
        lengthMax.style.display = "block";
    } else if (valueMdp.length < 10 && lengthMax){
        lengthMax.style.display = "none";
    }


})




    