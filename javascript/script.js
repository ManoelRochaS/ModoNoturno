
const header = document.querySelector("header");
const title = document.getElementById("Title");
const displayMenu = document.getElementById("displayMenu");
const displayClick = document.getElementById("displayClick");
const displayExtensive = document.getElementById("displayExtensive");
let control = true;

/*Área de configuração do display */
function Mode(value){
    displayMenu.style.display = "none";
    (value == "Click") ? displayClick.style.display = "flex" : displayExtensive.style.display = "flex";
    header.style.padding = "0vh";
}

function Return(){
    displayMenu.style.display = "flex";
    displayClick.style.display = "none";
    displayExtensive.style.display = "none";
    header.style.padding = "10vh 0vh";
}

/*Área de configuração das cores e mudanças necessárias */
function Action(){
    (control) ? title.innerText = "Modo Noturno" : title.innerText = "Modo Diário";
    (control) ? document.body.classList.add('bodyDark') : document.body.classList.remove('bodyDark');
    (control) ? control = false : control = true;
}

