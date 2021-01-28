/*
Primitivos (imutáveis) - string,number,boolean, 
undefined, null(bidgint,symbol)
São copiados*/

let a = 'A';
let b = a;
let c = b;

console.log(a,b);

a = 'Outra coisa';
console.log(a,b);

//Referência (mutável) - array, object, funcion
// são passados por referencia
let c = [1,2,3];
let d = c;

c.push(4);

console.log(c,d);

d.pop();

console.log(c,d);

a.push(5);
console.log(c);
