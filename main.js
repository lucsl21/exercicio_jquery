const butadd = document.querySelector('.botao-adicionar')
const butcancel = document.querySelector('#botao-cancelar')
const input = document.querySelector('.nova-tarefa')
const listLoaded = document.querySelector('.list-tasks')


let listaTarefas = []

function valueInput() {
    listaTarefas.push(input.value)
    input.value = ''
    input.focus()
    displayTarefas()
}

function cancelar(){
    input.value = ''
}

function displayTarefas() {
    let novaLi = ''

    listaTarefas.forEach(task => {
        novaLi = novaLi + `
        <li class="task"> 
            <p>${task}</p>
        </li>`
    })

listLoaded.innerHTML = novaLi

}

listLoaded.addEventListener('click', function(e){
    e.target.classList.toggle('concluido')
})

butadd.addEventListener('click', valueInput)
butcancel.addEventListener('click', cancelar)
