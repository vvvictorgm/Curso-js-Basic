const novaTarefa = document.querySelector('.nova-tarefa');
const botaoAadicionarTarefa = document.querySelector('.botao-adicionar-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return(li);
 
}
novaTarefa.addEventListener ('keypress', function(e){
    if(e.keyCode === 13 ){
        if(!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
    limpaInput();
    }

});
function limpaInput(){
    novaTarefa.value ='';
    novaTarefa.focus();
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput; 
    tarefas.appendChild(li);
    limpaInput();

}

botaoAadicionarTarefa.addEventListener('click', function(){
    if(!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);


});