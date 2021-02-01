function meuEscopo(){
    const peso, altura;
peso = document.getElementById('peso');
altura = document.getElementById('altura');
const form = document.querySelector('#form');
let imc;

form.addEventListener('submit', function(e){
    e.preventDefault();
    imc = (peso/altura)*altura;
});


}

meuEscopo();