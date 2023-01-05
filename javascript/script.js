
/*Declaração de Constantes (Id e Class) - header, title, displayMenu, displayClick e displayExtensive*/
const header = document.querySelector("header");
const title = document.getElementById("Title");
const displayMenu = document.getElementById("displayMenu");
const displayClick = document.getElementById("displayClick");
const displayExtensive = document.getElementById("displayExtensive");

/*Declaração de Variáveis (Controle) - control*/
let control = true;

/*Funções Principais - Mode(value), Return() e Engine()*/
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

function Engine(){
    (control) ? title.innerText = "Modo Noturno" : title.innerText = "Modo Diário";
    (control) ? document.body.classList.add('bodyDark') : document.body.classList.remove('bodyDark');
    (control) ? control = false : control = true;
}

