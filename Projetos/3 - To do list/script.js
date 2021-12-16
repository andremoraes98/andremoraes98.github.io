let addButton = document.querySelector("#criar-tarefa")
let taskList = document.querySelector("#lista-tarefas")
let input = document.querySelector("#texto-tarefa")
let taskSelected


// 5 - criar o botão para adicionar um item à lista
addButton.addEventListener("click", addTask)

function addTask () {
    const liItem = document.createElement("li")
    liItem.innerText = input.value
    input.value = ""
    taskList.appendChild(liItem)
}

// 7 - adicionar o fundo a task que receber um click
taskList.addEventListener("click", addGrayBackground)

// 8 - só um elemento pode ficar com o gray background simultaneamente
function addGrayBackground (event) {
    taskList.removeAttribute("style")
    let taskListItem = document.querySelectorAll("li")
    for (let index = 0; index < taskListItem.length; index += 1) {
        taskListItem[index].classList.remove('selected')
    }
    event.target.classList.add('selected')
    taskSelected = event.target //adicionado para completar a resolução do item 14, armazenando a tag da task selecionada em uma variável
}

// 9 - risca um elemento quando clicado duas vezes e tira o risco se for clicado duas vezes novamente
taskList.addEventListener("dblclick", addRemoveClassCompleted)

function addRemoveClassCompleted (event) {
    if (event.target.classList.contains("completed")) {
        event.target.removeAttribute("class")
    } else {
        event.target.classList.add("completed")
    }
}

// 10 - remove os itens da lista
let clearButton = document.querySelector("#apaga-tudo")

clearButton.addEventListener("click", removeListItem)

function removeListItem() {
    let taskListItem = document.querySelectorAll("li")
    for ( let index = 0; index < taskListItem.length; index += 1 ) {
        taskListItem[index].remove();
    }
}

// 11 - remover os itens finalizados
let conclusionButton = document.querySelector("#remover-finalizados")

conclusionButton.addEventListener("click", removeCompletedTasks)

function removeCompletedTasks () {
    let concludedTasks = document.querySelectorAll(".completed")
    for (let index = 0; index < concludedTasks.length; index += 1) {
        concludedTasks[index].remove()
    }
}

// 12 - salvar a lista no local storage
let saveButton = document.querySelector("#salvar-tarefas")

saveButton.addEventListener("click", saveTasks)

function saveTasks () {
    let taskListItem = document.querySelectorAll("li")
    let arrayTask = [], classTask = []
    for (let index = 0; index < taskListItem.length; index += 1 ) {
        arrayTask.push(taskListItem[index].innerHTML)
        classTask.push(taskListItem[index].className)
    }
    localStorage.setItem("task", JSON.stringify(arrayTask))
    localStorage.setItem("classTask", JSON.stringify(classTask))
}

window.onload = innitialRenderization
function innitialRenderization () {
    let arrayTask = JSON.parse(localStorage.getItem("task"))
    let classTask = JSON.parse(localStorage.getItem("classTask"))
    
    if (arrayTask !== null && classTask !== null) {
        for (let index = 0; index < arrayTask.length; index += 1) {
            let taskListItem = document.createElement("li")
            taskListItem.innerText = arrayTask[index]
            taskListItem.className = classTask[index]
            taskList.appendChild(taskListItem)
        }
    }
}

// 13 - adicionar botões de mover para cima e mover para baixo
let moveUpButton = document.querySelector("#mover-cima")
let moveDownButton = document.querySelector("#mover-baixo")

moveUpButton.addEventListener("click", moveTaskUp)
moveDownButton.addEventListener("click", moveTaskDown)

function moveTaskUp () {
    taskListItem = document.getElementsByTagName("li")

    for (let index = 0; index < taskListItem.length; index += 1) {
        if ( taskListItem[index] === taskSelected) {
            if (index !== 0 ) {
                let changedList = taskListItem[index-1] //Salvando o elemento anterior ao da task selecionada
            taskList.replaceChild(taskSelected, taskListItem[index-1]) //  Linha utilizada para substituir o conteúdo da task selecionada pelo da linha acima, pesquisado através do site https://developer.mozilla.org/pt-BR/docs/Web/API/Node/replaceChild
            taskListItem[index-1].insertAdjacentElement("afterend", changedList) // Linha utilizada para inserir o elemento changedList na posição anterior ao da task selecionada, pesquisado através do site https://www.w3schools.com/jsref/met_node_insertadjacentelement.asp
            }
        }
    }
}

function moveTaskDown () {
    taskListItem = document.getElementsByTagName("li")

    for (let index = 0; index < taskListItem.length; index += 1) {
        if ( taskListItem[index] === taskSelected) {
            if ( index !== taskListItem.length-1) {
                let changedList = taskListItem[index+1] //Salvando o elemento posterior ao da task selecionada
                taskListItem[index].insertAdjacentElement("beforebegin", changedList) //Linha utilizada para inserir o elemento changedList na posição anterior ao da task selecionada, pesquisado através do site https://www.w3schools.com/jsref/met_node_insertadjacentelement.asp
                index += 1
            }
        }
    }
}


// 14 - remove o item selecionado
let buttonRemoveSelected = document.querySelector("#remover-selecionado")

buttonRemoveSelected.addEventListener("click", removeSelectedTask)

function removeSelectedTask () {
    taskSelected.remove()
}