const nome = 'Victor Augusto';
const nomes = ['Victor', 'Augusto', 'Broot'];
//for of
for (let valor of nome){
    console.log(valor);
}

for(let i of nomes){
    console.log(i);
}
nomes.forEach(function(valor, indice){
    console.log(valor, indice);
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