const form = document.querySelector('#formulario');


form.addEventListener('submit', function(evento){
    evento.preventDefault();
    resultado("oi");

});

function resultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
}
function criaP(){
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p);
}

