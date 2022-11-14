// let nameUser = prompt("Informe seu nome: ")
// while(nameUser.length <  3){
//     nameUser = prompt("Informe seu nome: ")
// }
let a, b, c, d;
let value = ""
function selecionarItem(seletor){
    const pai = seletor.querySelector(".fotos");
    const clicado = seletor.parentNode.parentNode.querySelector(".clicado");
    if (clicado !== null){
        clicado.classList.remove("clicado")
    }
    pai.classList.add("clicado")
    const secao = seletor.parentNode.parentNode.classList.value;
    if(secao === "secao-modelo"){
        camisaClicada(true)
    } else if (secao === "secao-gola"){
        golaClicada(true)
    } else {   
        tecidoClicado(true)
    }
}

function camisaClicada(contido){ 
    a = contido
    botaoClicavel()
}

function golaClicada(contido){
    b = contido
    botaoClicavel()
}

function tecidoClicado(contido){ 
    c = contido 
    botaoClicavel()
}

function botaoClicavel(){
    const botao = document.querySelector(".button")
    if (a && b && c && d){
        botao.style.background = "#404EED"
    } else {
        botao.style.background = "#C4C4C4";
    }
}


const btn = document.querySelector("#formulario")
btn.addEventListener("submit", function(e){
    e.preventDefault();    
    const name = document.getElementById("name");
    name.value = ""
})

function verificarUrl(){
    const name = document.getElementById("name").value;
    value = name;
    botaoClicavel()
}

function trim(str) {
    return str
}

const input = document.querySelector("#name")
input.onkeyup = function(){ 
    value = trim(input.value)
    if(value.includes("https:") && value.length > 6){
        d = true
        botaoClicavel()
    } else if (value.includes("http:") && value.length > 5){
        d = true
        botaoClicavel()
    } else {
        d = false;
        botaoClicavel()
    }
  }

// input.addEventListener("keypress", function(e){
//     verificarUrl()
// })