const novaTarefa = document.querySelector('.nova-tarefa');
const botaoAadicionarTarefa = document.querySelector('.botao-adicionar-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return (li);

}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar Tarefa';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

novaTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!novaTarefa.value) return;
        criaTarefa(novaTarefa.value);
    }

});

function limpaInput() {
    novaTarefa.value = '';
    novaTarefa.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);

}

botaoAadicionarTarefa.addEventListener('click', function () {
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);


});