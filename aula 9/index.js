//tipos de dados primitivos
const nome = 'Victor'; //String
const nome2 = "Victor"; //String
const nome3 =`Victor`;// String
const num = 10; //number
const num2 = 10.52 //number
let nomeAluno //undefined = não aponta para nenhum lugar a propria linguagem irá setar isso, nunca o programador
const sobrenomeAluno = null // Nulo -> desconfigurar uma variavel
const boolean = true; //true or false

const array = [1,2];
const b = array;

console.log(array,b);

b.push(3);

console.log(array,b); 