let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function addTask() {
    let task = document.getElementById('newtask').value;
    if (!task){
        alert('preencha o campo!')
        return
    }
    tarefas.push(task);
    attList(); 
    salvarStorage();
    clearInput()
}

function attList() {
    let list = document.getElementById('todotask');
    clearList();

    tarefas.forEach((element, index) => {            
        let item = document.createElement('li');
        let btnexc = document.createElement('button');
        let btnedit = document.createElement('button');

        item.textContent= element;
        btnexc.textContent = "excluir";
        btnedit.textContent = "editar";

        btnexc.setAttribute("onclick", `remove(${index})`)
        btnedit.setAttribute("onclick", `edit(${index})`)

        item.appendChild(btnexc)
        item.appendChild(btnedit)
        list.appendChild(item)
    });
}

function edit(id) {
    let novo_tarefa = prompt(`Você está editando a tarefa ${tarefas[id]}:`)
    tarefas[id] = novo_tarefa;
    salvarStorage();
    attList();
}

function remove(id) {
    tarefas.splice(id, 1);
    salvarStorage();
    attList();
}

function salvarStorage() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))        
}

function clearList() {
    let list = document.getElementById('todotask');
    list.innerHTML = ""
}

function clearInput() {
    let inp = document.getElementById('newtask');
    inp.value = "";
}

window.addEventListener('load', () => {
    attList();
})