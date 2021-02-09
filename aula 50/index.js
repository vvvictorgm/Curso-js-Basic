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