const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
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


iniciar.addEventListener('click', function (evento) { 
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarContador();
});

pausar.addEventListener('click', function (evento) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function (evento) {
    relogio.classList.remove('pausado');

    clearInterval(timer);
    relogio.innerText = horaZero(0);
    contador = 0;
});

