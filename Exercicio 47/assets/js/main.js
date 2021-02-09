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
function pausarContador(){
    setTimeout(function(){
        clearInterval(timer);
    });
}




iniciar.addEventListener('click', function (evento) {
    iniciarContador();
});

pausar.addEventListener('click', function (evento) {
    pausarContador();
});

zerar.addEventListener('click', function (evento) {
    relogio.innerText = horaZero(0);
    contador = 0;
});

