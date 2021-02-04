const verdadeira = true;

//let tem escopo de bloco {....bloco}
//var só tem escorpo de função

let nome ='Luiz';
var nome2= 'Luiz';

if(verdadeira){
    let nome = 'Otavio';
    console.log(nome,nome2);

    if(verdadeira){
        let nome = 'Outra coisa';
        console.log(nome,nome2);
    }
}