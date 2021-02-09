const novaTarefa = document.querySelector('.nova-tarefa');
const botaoAadicionarTarefa = document.querySelector('.botao-adicionar-tarefa');
const tarefas = document.querySelector('.tarefas');

botaoAadicionarTarefa.addEventListener('click', function(){
    if(!novaTarefa.value) return;
    
    console.log(novaTarefa.value);

});