//Escreva uma função que receba dois numeros e retorn o maior deles

function maior (n1,n2){
    if(n1===n2)return `São iguais`;
    return (n1 > n2?n1 :n2) ;
    }

console.log(maior(334,34));