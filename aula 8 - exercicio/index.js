/*
Luiz Otavio Mirando tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.9595959595954
Luiz Otavio nasceu em 199x
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc = peso/(altura*altura);
let anoNascimento = 2021 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa',peso,'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);