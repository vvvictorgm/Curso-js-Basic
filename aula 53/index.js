function criaOutraFuncao(nome){

    return function(){
        return  nome;
    }
}

const funcao = criaOutraFuncao('Victor');
const funcao2 = criaOutraFuncao('Pedro');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao());
console.log(funcao2());