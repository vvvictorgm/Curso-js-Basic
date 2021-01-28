
//utilizar a função meuEscopo para não poluir o Document e assim preservando 
//nossas variaveis
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    let contador = 0;
    const pessoas = [];
    /*form.onsubmit = function(evento) {
        //faz com que qualquer função padrão seja desativada, nesse caso estamos usando para que não seja atualizado a pagina
        evento.preventDefault();
        alert(1);
        console.log("foi enviado");
    };
    */
    //o efeito é o mesmo, mas agora estamos adicionando um Listener
    form.addEventListener('submit', function (evento) {

        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const idade = form.querySelector('.idade');
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            idade: idade.value
        };
        console.log(pessoa);
        pessoas[contador] = pessoa;
        contador++;
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} altura: ${idade.value} peso: ${peso.value}</p>`;
    });
}
meuEscopo();