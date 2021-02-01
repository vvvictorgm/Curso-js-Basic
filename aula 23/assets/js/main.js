const form = document.querySelector('#formulario');


form.addEventListener('submit', function(evento){
    evento.preventDefault();
    resultado("oi");
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    const peso = Number(inputPeso);
    const altura = Number(inputAltura);

    if(!peso){
        resultado("Peso Invalido!", false);
        return; 
    }
    if(!altura){
        resultado("Altura Invalida!", false);
        return; 
    }
    console.log("cheguei aqui");

});

function resultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP(); 
    p.innerHTML = msg;
    resultado.appendChild(p);

}
function criaP(){
    const p = document.createElement('p');
    return p;

}

