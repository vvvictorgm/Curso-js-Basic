
//utilizar a função meuEscopo para não poluir o Document e assim preservando 
//nossas variaveis
function meuEscopo() {
    const form = document.querySelector('.form');
    /*form.onsubmit = function(evento) {
        //faz com que qualquer função padrão seja desativada, nesse caso estamos usando para que não seja atualizado a pagina
        evento.preventDefault();
        alert(1);
        console.log("foi enviado");
    };
    */
   //o efeito é o mesmo, mas agora estamos adicionando um Listener
   form.addEventListener('submit', function(evento){
       evento.preventDefault();
       const nome = form.querySelector('.nome');
       const nome = form.querySelector('.sobrenome');
       const nome = form.querySelector('.peso');
       const nome = form.querySelector('.altura');   
       console.log("foi enviado");  
  
   });
}
meuEscopo();