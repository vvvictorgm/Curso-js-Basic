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
const {nome, 
    sobrenome, 
    idade, 
    trabalho = 'Programador', 
    endereco: {rua: r, numero}
} = pessoa;

const{nome: n,...resto} = pessoa;
console.log(resto);