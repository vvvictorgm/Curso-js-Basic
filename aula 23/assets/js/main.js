const form = document.querySelector('#formulario');


form.addEventListener('submit', function(evento){
    evento.preventDefault();
    resultado("oi");
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso);
    console.log(altura);
    if(!peso){
        resultado("Peso Invalido!", false);
        
        return; 
    }
    if(!altura){
        resultado("Altura Invalida!", false);
        return; 
    }
   

    const imc = getIMC(peso, altura);
    console.log(imc);

});
function getIMC(x,y){
    const resultado = x/y**2;
    console.log(resultado);
    return resultado.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function resultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP(); 
    p.innerHTML = msg;
    resultado.appendChild(p);

}


