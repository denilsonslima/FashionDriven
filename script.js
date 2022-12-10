let input = document.querySelector("#name");
const btn = document.querySelector("#formulario");
const api = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
const apiPost = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
let elementosClicados;
let value = ""
let pegarValue;
let modeloEscolhido, golaEscolhido, tecidoEscolhido, novoPedido;
let nameUser = prompt("Informe seu nome: ")

function selecionarItem(seletor) {
    const pai = seletor.querySelector(".fotos");
    const clicado = seletor.parentNode.parentNode.querySelector(".clicado");
    if (clicado !== null) {
        clicado.classList.remove("clicado")
    }
    pai.classList.add("clicado")
    elementosClicados = document.querySelectorAll(".clicado")
    const secao = seletor.parentNode.parentNode.classList.value;
    if (secao === "secao-modelo") {
        modeloEscolhido = seletor.classList.value;
        botaoClicavel()
    } else if (secao === "secao-gola") {
        golaEscolhido = seletor.classList.value;
        botaoClicavel()
    } else {
        tecidoEscolhido = seletor.classList.value;
        botaoClicavel()
    }
}

const botao = document.querySelector(".button")
function botaoClicavel() {
    if (elementosClicados.length === 3 && value !== "") {
        botao.style.background = "#404EED"
        pegarValue = true
    } 
    
    else {
        botao.style.background = "#C4C4C4";
        pegarValue = false
    }
}

input.onkeyup = () => {
    value = input.value
    botaoClicavel()
}

btn.addEventListener("submit", (e) => {
    e.preventDefault();
    if (pegarValue) {
        document.querySelector(".secao-modelo .clicado").classList.remove("clicado")
        document.querySelector(".secao-gola .clicado").classList.remove("clicado")
        document.querySelector(".secao-tecido .clicado").classList.remove("clicado")
        botao.style.background = "#C4C4C4";
        pegarValue = false
        input.value = ""
        criarPedido()
    }
})



function criarPedido() {
    novoPedido =
    {
        model: modeloEscolhido,
        neck: golaEscolhido,
        material: tecidoEscolhido,
        image: value,
        owner: nameUser,
        author: "Denilson Lima"
    }

    axios.post(apiPost, novoPedido)
        .then(carregarPedidos)
        .catch(console.log("erro"))
}


function carregarPedidos() {
    axios.get(api)
        .then(renderizarPedidos)
        .catch(console.log("erro"))
}

function renderizarPedidos(p) {
    const pedido = p.data
    const camisas = document.querySelector(".camisas")
    camisas.innerHTML = ""
    for (let i = 0; i < pedido.length; i++) {
        camisas.innerHTML += `
            <div class="caixa">
                <div class="foto">
                    <img src="${pedido[i].image}" alt="imagem blusa"/>
                </div>
                <h2>Criador: ${pedido[i].owner}</h2>
            </div>
        `
    }
}



carregarPedidos()
