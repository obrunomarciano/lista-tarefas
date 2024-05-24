let input = document.getElementById("input-principal")
let button = document.getElementById("botao-adicionar")
let listaCompleta = document.getElementById("tarefas")


let arrayDeTarefas = []

function cliqueiNoBotao() {
    arrayDeTarefas.push(input.value)
    mostrarNaTela()
}

function mostrarNaTela() {
    let novaLista = ""

    arrayDeTarefas.forEach(tarefa => {
        novaLista = novaLista + `
            <li class="item-tarefa">
                <p>${tarefa}</p>
            </li>
        `
    })

    listaCompleta.innerHTML = novaLista

}

console.log(input)
console.log(button)

button.addEventListener("click", cliqueiNoBotao)

