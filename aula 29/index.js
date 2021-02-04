//...rest, ...spread;

const numeros = [1,2,3,4,5,6,7,8,9];
const [primeiroNumero, , terceiroNumero, , quintoNumero, ...resto] = numeros;
console.log(primeiroNumero,terceiroNumero, quintoNumero);
console.log(resto);