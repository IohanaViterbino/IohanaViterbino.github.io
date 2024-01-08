let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function addTask() {
    let task = document.getElementById('newtask').value;
    if (!task){
        alert('preencha o campo!');
        return
    }
    tarefas.push(task);
    attList(); 
    salvarStorage();
    clearInput();
}

function attList() {
    let list = document.getElementById('todotask');
    clearList();
    
    tarefas.forEach((element, index) => {            
        let item = document.createElement('li');
        let txtitem = document.createElement('p');
        let btnexc = document.createElement('button');
        let btnedit = document.createElement('button');
        
        txtitem.textContent= element;
        btnexc.textContent = "excluir";
        btnedit.textContent = "editar";
        
        item.setAttribute("class", "task");
        btnexc.setAttribute("onclick", `remove(${index})`);
        btnedit.setAttribute("onclick", `edit(${index})`);
        
        item.appendChild(txtitem);
        item.appendChild(btnexc);
        item.appendChild(btnedit);
        list.appendChild(item);
    });
}

function edit(id) {
    let novo_tarefa = prompt(`Você está editando a tarefa ${tarefas[id]}:`);
    if (!novo_tarefa){
        alert('preencha o campo!');
        return
    }
    tarefas[id] = novo_tarefa;
    salvarStorage();
    attList();
}

function remove(id) {
    let x = confirm(`DEseja realmente excluir a tarefa "${tarefas[id]}"`);
    if(!x){
        alert("operação cancelada!")
    } else{
        tarefas.splice(id, 1);
        salvarStorage();
        attList();
    }
}

function salvarStorage() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));        
}

function clearList() {
    let list = document.getElementById('todotask');
    let list2 = document.getElementById('filtertask');
    list.innerHTML = ""
    list2.innerHTML = ""
}

function clearInput() {
    let inp = document.getElementById('newtask');
    inp.value = "";
}

window.addEventListener('load', () => {
    attList();
})

function searchTask() {
    let list = document.getElementById('filtertask');
    let task = document.getElementById('newtask').value;
    if (!task){
        alert('preencha o campo!');
        return
    }
    //função callback, forEach
    const result = tarefas.find((t, i) => {
        if (t === task){
            let item = document.createElement('li');
            let txtitem = document.createElement('p');
            let btnexc = document.createElement('button');
            let btnedit = document.createElement('button');
            
            txtitem.textContent= t;
            btnexc.textContent = "excluir";
            btnedit.textContent = "editar";
            
            item.setAttribute("class", "task");
            btnexc.setAttribute("onclick", `remove(${i})`);
            btnedit.setAttribute("onclick", `edit(${i})`);
            
            item.appendChild(txtitem);
            item.appendChild(btnexc);
            item.appendChild(btnedit);
            list.appendChild(item);
        }
    });
}