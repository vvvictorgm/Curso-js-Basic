//...rest, ...spread;

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, , terceiroNumero, , quintoNumero, ...resto] = numeros;
console.log(primeiroNumero, terceiroNumero, quintoNumero);
console.log(resto);

//                              0           1           2
//                           0  1  2    0  1  2     0  1  2

const arrayDentroDeArray = [[1, 2, 3], [4, 5, 6,], [7, 8, 9]];
const[,,[,oito]] = arrayDentroDeArray;
console.log(oito);
console.log(arrayDentroDeArray[1][2]);//busca o elemento 2 dentro do elemento 1 = 6 
