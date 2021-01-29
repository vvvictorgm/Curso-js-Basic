/*
Operadores logicos:

&& -> AND
|| - > OR
! -> NOT


const primeiro_exemplo = true && false && true && true && true;
const segundo_exemplo = false || true || false || false || false;

console.log(primeiro_exemplo, segundo_exemplo);

/*avaliação de curto circuito 
&& -> false && true -> false " o valor mesmo"
|| -> true && false -> vai retornar " o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
Nan


console.log('Luiz' && NaN && 'Maria');

function falaOi(){
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());
*/

console.log (0 || null || 'Luiz Otavio' || true);

const corUsuario = "preto";
const corPadrao = corUsuario || 'red';

console.log(corPadrao);


