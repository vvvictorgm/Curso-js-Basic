//funções
//declaração de função (function hoisting ( o motor do java Script vai sempre será elevada ao topo do a arquivo na hora de executar a funçao
// isso permite que a gente, por exemplo, declare uma função e chame por ela antes ela ser declarada ))
function falaOi(){
    console.log('oi');
}
//first-class objetcs (objeto de primeira classe ) = pode ser tratada como dado
//function expression
const souUmDado = function(){
    console.log('Sou um dado');
}

function executarFuncao(funcao){
    console.log('Vou executar sua função abaixo');
    funcao();
}
executarFuncao(souUmDado);

//arrow function 
const funcaoArrow = () =>{
    console.log('sou uma arrow function');
}

const obj = {
    falar(){
        console.log('Estou falando');
    }
};
obj.falar();