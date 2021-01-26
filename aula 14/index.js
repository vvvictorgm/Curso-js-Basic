// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0

num1 = Number(num1.toFixed(2));//função para resolver imprecisão do javascript

console.log(num1);





//console.log(num1.toString() + num2); //utilizando o num 1 como String, mas ele continua sendo um numero
//num1 = num1.toString(); //agora ele é uma string
//console.log(num1.toString(2));//valor binario
//console.log(num1.toFixed(2));//arredonda para o numero de casa decimais definido na caixa 
//console.log(Number.isInteger(num1)); //verifica se é inteiro
//let temp = num1 * '5';
//console.log(Number.isNaN(temp));//verifica se é um "NaN ( not a number)"