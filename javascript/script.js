
let Header = document.getElementById("Header");
let Interface = document.getElementById("Interface");
let InterfaceOne = document.getElementById("InterfaceOne");
let InterfaceTwo = document.getElementById("InterfaceTwo");
let Title = document.getElementById("Title");


function Clique(){
    Interface.style.display = "none";
    InterfaceOne.style.display = "flex";
    Header.style.padding = "0vh 0vh";
}

function Extensivo(){
    Interface.style.display = "none";
    InterfaceTwo.style.display = "flex";
    Header.style.padding = "0vh 0vh";
}

function Return(){
    Interface.style.display = "flex";
    InterfaceOne.style.display = "none";
    InterfaceTwo.style.display = "none";
    Header.style.padding = "10vh 0vh";
}

let control = true;
function Action(){
    if(control){
        Title.innerText = "Modo Noturno";
        document.body.classList.add('Black');
        control = false;
    }
    else{
        Title.innerText = "Modo Diário";
        document.body.classList.remove('Black');
        control = true;
    }
}
