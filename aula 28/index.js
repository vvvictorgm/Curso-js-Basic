const verdadeira = true;

//let tem escopo de bloco {....bloco}
//var só tem escorpo de função

let nome ='Luiz';//criando
var nome2= 'Luiz';//criando

if(verdadeira){
    let nome = 'Otavio';//criando
    var nome2 = 'Pedro'; //redeclarando
    console.log(nome,nome2);

    if(verdadeira){
        let nome = 'Outra coisa';//criando
        var nome2 = 'Ronaldo';//redeclarando
        console.log(nome,nome2);
    }
}
console.log(nome,nome2);