//Escreva uma função que receba dois numeros e retorn o maior deles

function maior (a,b){
    const n1 = a;
    const n2 = b;
    if(n1===n2){
        return `São iguais`;
    }
    const resultado = n1 > n2?n1 :n2 ;
    return(resultado);
}

console.log(maior(34,34));