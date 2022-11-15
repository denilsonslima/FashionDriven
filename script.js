const input = document.querySelector("#name");
const btn = document.querySelector("#formulario");
let elementosClicados, url;
let value = ""
let pegarValue;
let modeloEscolhido, golaEscolhido, tecidoEscolhido, novoPedido;

// let nameUser = prompt("Informe seu nome: ")
// while(nameUser.length <  3){
//     nameUser = prompt("Informe seu nome: ")
// }
let nameUser = "Eu"

function selecionarItem(seletor){
    const pai = seletor.querySelector(".fotos");
    const clicado = seletor.parentNode.parentNode.querySelector(".clicado");
    if (clicado !== null){
        clicado.classList.remove("clicado")
    }
    pai.classList.add("clicado")
    elementosClicados = document.querySelectorAll(".clicado")
    const secao = seletor.parentNode.parentNode.classList.value;
    if(secao === "secao-modelo"){
        modeloEscolhido = seletor.classList.value;
        botaoClicavel()
    } else if (secao === "secao-gola"){
        golaEscolhido = seletor.classList.value;
        botaoClicavel()
    } else {  
        tecidoEscolhido = seletor.classList.value; 
        botaoClicavel()
    }
}

function botaoClicavel(){
    const botao = document.querySelector(".button")
    if ((url !== undefined) && (url !== "")){
        if(elementosClicados.length === 3){
            botao.style.background = "#404EED"
            pegarValue = true
        }
    } else {
        botao.style.background = "#C4C4C4";
        pegarValue = false
    }
}

function trim(str) {
    return str
}

input.onkeyup = function(){ 
    url = value = trim(input.value)
    botaoClicavel()
}

btn.addEventListener("submit", function(e){
    e.preventDefault(); 
    criarPedido() 
    if(pegarValue){
        const name = document.getElementById("name");
        name.value = ""
    }
})


function criarPedido (){
    novoPedido= 
    {
        model: modeloEscolhido,
        neck: golaEscolhido,
        material: tecidoEscolhido,
        image: value,
        owner: nameUser,
        author: "Denilson Lima"
    }
    console.log(novoPedido)
} 

//     const requisicao = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", novoPedido);
//     requisicao.then(deuCerto)
//     requisicao.catch(function (){})
//     function deuCerto(){
//         carregarPedidos()
//     }
// }

// const api = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
// function carregarPedidos(){
//     axios.get(api)
//     .then(ana)
//     .catch(error)
// } 

// function ana(promessa){
//     const pedido = promessa.data
//     const camisas = document.querySelector(".camisas")
//     camisas.innerHTML = ""
//     for(let i = 0; i < pedido.length; i++){
//         camisas.innerHTML+= `
//         <div class="caixa">
//             <div class="foto"></div>
//             <h2>Criador: ${pedido[i].owner}</h2>
//         </div>
//         `
//     }
//     const fotos = document.querySelectorAll(".foto") 
//     for(let i = 0; i < fotos.length; i++){
//         fotos[i].style.backgroundImage = `url(${pedido[i].image})`
//     }
// } 

// function error(erro){
//     console.log(erro)
// } carregarPedidos()
