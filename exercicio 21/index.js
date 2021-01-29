/*
Operadores logicos:

&& -> AND
|| - > OR
! -> NOT
*/

const primeiro_exemplo = true && false && true && true && true;
const segundo_exemplo = false || true || false || false || false;

console.log(primeiro_exemplo, segundo_exemplo);

/*avaliação de curto circuito 
&& -> false && true -> false " o valor mesmo"
|| ->

FALSY
false
0
'' "" ``
null / undefined
Nan
*/

console.log('Luiz' && NaN && 'Maria');

function falaOi(){
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());