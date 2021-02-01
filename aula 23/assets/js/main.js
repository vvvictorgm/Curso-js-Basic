//capturar evento de submit do formulário para executar ações quando clicar no botão
const form = document.querySelector('#formulario');
//adicionado a função de listener para verificar quando o botão foi clicado
form.addEventListener('submit', function(evento){
    //retirado a funçao padrão para que a tela não resetasse
    evento.preventDefault();
    //caputando os campos de peso e altura
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    //pegando os valores de peso e altura que foram preenchidos
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //verificando se foi digitado um peso e altura validas
    if(!peso){
        resultado("Peso Invalido!", false);
        
        return; 
    }
    if(!altura){
        resultado("Altura Invalida!", false);
        return; 
    }
   
    //iniciando a variavel imc e nivel imc e passando os valores para as funçõies
    const imc = getIMC(peso, altura);
    const nivelImc = getNivelIMC(imc);
    
    //preparando a mensagem para ser enviada
    const msg = `Seu imc é ${imc} (${nivelImc})`;
    
    resultado(msg, true);

});

//função calcula o seu nivel de imc baseado no valor enviado e gera uma frase de acordo com o nivel
function getNivelIMC(imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
    if(imc >=39.9) return nivel[5];
    if(imc >=24.9) return nivel[4];
    if(imc >=29.9) return nivel[3];
    if(imc >=24.9) return nivel[2];
    if(imc >=18.5) return nivel[1];
    if(imc <18.5) return nivel[0];
}
//calculo principal para verificar o imc
function getIMC(x,y){
    const resultado = x/y**2;
    console.log(resultado);
    return resultado.toFixed(2);
}
//função para criar paragrafo
function criaP(){
    const p = document.createElement('p');
    return p;
}

//função que exibe o resultado na tela
function resultado (msg, isValid){
    //caputura a área embaixo do formulário para exibir a mensagem
    const resultado = document.querySelector('#resultado');
    //zera a mensagem toda vez que envia
    resultado.innerHTML = '';
    //cria um paragrafo
    const p = criaP(); 
    
    //com o paragrafo criado cria uma classe que tem o css dependendo se o resultado foi valido ou não
    if(isValid){
    p.classList.add('resultado_positivo'); 
    }else{
        p.classList.add('resultado_negativo '); 

    }
    //exibe a mensagem na area final
    p.innerHTML = msg;
    resultado.appendChild(p);


}


