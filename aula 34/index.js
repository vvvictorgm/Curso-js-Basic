/*
for clássico - geralmente com iteráveis (array ou strings);
for  in -retorna o indice ou chave (string, array ou objetos)
for of - retorna o valor em si (iteraveis, array ou strings )
*/


const nome = 'Victor Augusto';
const nomes = ['Victor', 'Augusto', 'Broot'];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}
/*//for of
for (let valor of nome){
    console.log(valor);
}

for(let i of nomes){
    console.log(i);
}
nomes.forEach(function(valor){
    console.log(valor);
});
nomes.forEach(function(valor, indice){
    console.log(valor, indice);
});
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});


/*
//for normal
for(let i = 0; i< nome.length; i++){
    console.log(nome[i]);
}
// for in 
for (let i in nome){
    console.log(nome[i]);
}
*/