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
    const nivelImc = getNivelIMC(imc);
    console.log(imc, nivelImc);  
    const msg = `Seu imc é ${imc} (${nivelImc})`;
    
    resultado(msg, true);

});

function getNivelIMC(imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
    if(imc >=39.9) return nivel[5];
    if(imc >=24.9) return nivel[4];
    if(imc >=29.9) return nivel[3];
    if(imc >=24.9) return nivel[2];
    if(imc >=18.5) return nivel[1];
    if(imc <18.5) return nivel[0];
}
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
    

    if(isValid){
    p.classList.add('resultado_positivo'); 
    }else{
        p.classList.add('resultado_negativo'); 

    }

    p.innerHTML = msg;
    resultado.appendChild(p);


}


