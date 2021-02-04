const pessoa = {
    nome: 'Victor',
    sobrenome:'Frazatto',
    idade: 30,
    endereco:{
        rua: 'Av Brasil',
        numero : 320
    }
};
//atribuição via desestruturação
const {nome} = pessoa;
console.log(pessoa.nome);