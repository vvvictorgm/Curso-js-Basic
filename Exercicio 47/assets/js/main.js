const relogio = document.querySelector('.relogio');

let contador = 0; 
let timer;

function horaZero(contador) {
    let data = new Date(contador *1000);

    return data.toLocaleTimeString('pT-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarContador(){
    timer = setInterval(function () {
        contador ++;
        relogio.innerText = horaZero(contador);
    }, 1000);


}

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado');

    clearInterval(timer);
    relogio.innerText = horaZero(0);
    contador = 0;
    }else if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarContador();
    }else if(el.classList.contains('pausar')){
        clearInterval(timer);
    relogio.classList.add('pausado');
    }

});


