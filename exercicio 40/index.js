//Escreva uma função que recebe um número e retorne o seguinte:
//numero é divisil por 3 = Fizz
//numero é divisil por 5 = Buzz
//numero é divisil por 3 e 5 = FizzBuzz
//numero NÃO é divisil por 3 e 5 = retorna o proprio numero
//checar se o numero é realmente um numero = returne o que recebeu
//use a função com número de 0 a 100
function fizzBuzz(n1){
    if(n1 === Nan) return n1;

    n1 % 3 && n1% 5 === 0?'FizzBuzz': 
    n1 % 3? 'Fizz' : 
    n1 % 5? 'Buzz' :
    n1;
}
/*
i=0;
do{
fizzBuzz(i);
console.log(fizzBuzz(i));
i++

}while(i<=100);
*/