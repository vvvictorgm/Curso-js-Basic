const novaTarefa = document.querySelector('.nova-tarefa');
const botaoAadicionarTarefa = document.querySelector('.botao-adicionar-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return(li);
 
}

function criaTarefa(textoInput){
    const li = criaLi();

}

botaoAadicionarTarefa.addEventListener('click', function(){
    if(!novaTarefa.value) return;
    criaTarefa();


});