const novaTarefa = document.querySelector('.nova-tarefa');
const botaoAadicionarTarefa = document.querySelector('.botao-adicionar-tarefa');
const tarefas = document.querySelector('.tarefas');

//função exclusiva para criar o 'li' dentro do html para formar a lista
function criaLi() {
    //cria o elemento Li e retorna ele para as outras funções
    const li = document.createElement('li');
    return (li);

}

//função para criar o botão de apagar a tarefa ao lado
function criaBotaoApagar(li) {
    //adicionar um espaçamento ao li
    li.innerHTML += ' ';
    //cria o elemento botão
    const botaoApagar = document.createElement('button');
    //muda o texto do botão
    botaoApagar.innerText = 'Apagar Tarefa';
    //adiciona um atributo para ser reconhecido por outra função
    botaoApagar.setAttribute('class', 'BotaoDeApagar');
    //o li recebido cria um "filho" e coloca-o a frente do mesmo
    li.appendChild(botaoApagar);
}
//verifica se a tecla "enter", foi clicada quando o inut está selecionado e chama a função de criar tarefa
novaTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!novaTarefa.value) return;
        criaTarefa(novaTarefa.value);
    }

});

//função para que ao criar uma nova tarefa, zera e deixa em foco
function limpaInput() {
    novaTarefa.value = '';
    novaTarefa.focus();
}

//função principal, cria a tarefa, recebe como parametro o texto escrito no input
function criaTarefa(textoInput) {
    //cria um li e chama o criaLi()
    const li = criaLi();
    //altera o texto do li para o texto recebido no input
    li.innerHTML = textoInput;
    //tarefas cria um " filho " e coloca no html
    tarefas.appendChild(li);
    //limpa tudo para começar uma nova tarefa e da foco
    limpaInput();
    //cria o botão de apagar e envia o li para criar um novo " filho"
    criaBotaoApagar(li);
    //adiciona a tarefa no banco de dados
    salvarTarefas();

}

//cria um listener para o botão de adicionar tarefa
botaoAadicionarTarefa.addEventListener('click', function () {
    //verifica se não está em branco o campo
    if (!novaTarefa.value) return;
    //chama a função cria tarefa com o valor que está no campo
    criaTarefa(novaTarefa.value);


});
//chama a função quando se é verificado se o item que contem a tag"botãoDeApagar" foi clicado
document.addEventListener('click', function (e) {
    const elementoClicado = e.target;
    if (elementoClicado.classList.contains('BotaoDeApagar')) {
        //faz a remoção do "pai" dele, e isso acaba que inclui ele mesmo
        elementoClicado.parentElement.remove();
    }
    salvarTarefas();

});
//função para salvar a tarefa no banco de dados
function salvarTarefas() {
    //cria uma constante que lista todos os li com todas as tarefas
    const liTarefas = tarefas.querySelectorAll('li');
    //cria um array para armazenar as li
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        //captura todos os textos 
        let tarefaTexto = tarefa.innerText;
        //apaga o texto do botão tarefa
        tarefaTexto = tarefaTexto.replace('Apagar Tarefa', '').trim();
        //insere a o texto da tarefa para dentro do array
        listaDeTarefas.push(tarefaTexto);


    }
    //cria uma variavel, e converste o JSON da listaDeTarefas para String
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //salva o JSON dentro do localStorage(banco de dados)
    localStorage.setItem('tarefas', tarefasJSON);

}
function recuperarTarefasSalvas(){
    //recupera as tarefas do banco de dados e coloca na variavel tarefas
    const tarefas = localStorage.getItem('tarefas');
console.log(tarefas);
    //convere as tarefas recuperadas de volta em um Array 
    const listaDeTarefasRecuperadas = JSON.parse(tarefas);
   //utilizando um for of para recuperar todos os itens do array e criamos uma tarefa para cada um deles
    for(let tarefa of listaDeTarefasRecuperadas){
        console.log(tarefa);
        console.log(listaDeTarefasRecuperadas);
        criaTarefa(tarefa);
    }
}
recuperarTarefasSalvas();