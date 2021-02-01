function meuEscopo(){
    //const peso = document.getElementById('peso'); ;

    //const altura = document.getElementById('altura');
const form = document.querySelector('#formulario');


form.addEventListener('submit', function(e){
    e.preventDefault();
    //imc = (peso/altura)*altura;
    //if(imc <18.5){
    //}
    console.log("evento previnido");

});


}

meuEscopo();