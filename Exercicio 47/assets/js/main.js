const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const timer = transformarEmHora();
timer.setHours(3,3,3);

function transformarEmHora (){
    let data = new Date();
    data.setHours(0,0,0);
    
    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    });
}





iniciar.addEventListener('click', function(evento){
    setInterval(function(){
        
        relogio.innerHTML(timer);
    },1000);  


});

pausar.addEventListener('click', function(evento){

});

zerar.addEventListener('click', function(evento){

});

