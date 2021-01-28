/*
Primitivos (imutáveis) - string,number,boolean, 
undefined, null(bidgint,symbol)*/

let a = 'A';
let b = a;

console.log(a,b);

a = 'Outra coisa';
console.log(a,b);

//Referência (mutável) - array, object, funcion
let c = [1,2,3];
let d = c;