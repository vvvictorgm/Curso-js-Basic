function meuEscopo(){
const exibicao = document.querySelector('#principal');
const data = new Date();
const dataArrumada = desmembrarDate(data);

function desmembrarDate(data){
const dia = data.getDate;
const diaNumero = data.getDay;
const mes = data.getMouth;



    exibicao.innerHTML = data;
 
}
}
meuEscopo;