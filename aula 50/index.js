// funções feito com a palavra "function", possui uma variavel "arguments" que sustenta todos os argumentos enviados
//nao funciona em arrow function
/*
function funcao(){
console.log(arguments);
}
funcao('Valor',1,2,3,4,5,6,7,8,9);

function soma(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total)
}

soma(1,23,4,5,6,7,44,43,3,45,6,3);
*/
function desestruturacao({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}
desestruturacao({nome:'victor',sobrenome:'frazatto',idade:29});
// ... rest operator
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
        

    }
    return acumulador;

}
console.log(conta('+',0,[20,30,40,50]));