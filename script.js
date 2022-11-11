function selecionarItem(seletor){
    const pai = seletor.parentNode;
    const clicado = pai.querySelector(".clicado")
    if (clicado !== null){
        clicado.classList.remove("clicado")
    }
    seletor.classList.add("clicado")
}

const btn = document.getElementById("send")

let value = ""
btn.addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name");
    value = name.value;
    name.value = ""
    console.log(value)
})